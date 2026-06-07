import Link from 'next/link'
import type { Noticia } from '@/lib/types'

type Props = {
  noticia: Noticia
  destaque?: boolean
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function CardNoticia({ noticia, destaque = false }: Props) {
  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block">
      <article className={`border border-white/10 rounded-lg overflow-hidden hover:border-[#F5C800]/50 transition-colors ${destaque ? 'md:flex' : ''}`}>
        {noticia.imagem_capa && (
          <div className={`bg-white/5 ${destaque ? 'md:w-1/2 h-64 md:h-auto' : 'h-48'} overflow-hidden`}>
            <img
              src={noticia.imagem_capa}
              alt={noticia.titulo}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-5 flex flex-col gap-3">
          {noticia.categoria && (
            <span className="text-[#F5C800] text-xs font-bold uppercase tracking-widest">
              {noticia.categoria}
            </span>
          )}
          <h2 className={`font-bold leading-tight text-white group-hover:text-[#F5C800] transition-colors ${destaque ? 'text-2xl' : 'text-lg'}`}>
            {noticia.titulo}
          </h2>
          {noticia.resumo && (
            <p className="text-white/60 text-sm line-clamp-3">{noticia.resumo}</p>
          )}
          <div className="flex items-center gap-3 text-white/40 text-xs mt-auto">
            {noticia.autor && <span>{noticia.autor}</span>}
            {noticia.autor && <span>·</span>}
            <span>{formatarData(noticia.criado_em)}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
