import Link from 'next/link'
import type { Noticia } from '@/lib/types'

type Props = {
  noticia: Noticia
  destaque?: boolean
  compacto?: boolean
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default function CardNoticia({ noticia, destaque = false, compacto = false }: Props) {
  if (compacto) {
    return (
      <Link href={`/noticias/${noticia.slug}`} className="group flex gap-3 items-start border-b border-white/10 pb-4 last:border-0">
        {noticia.imagem_capa && (
          <div className="w-20 h-16 flex-shrink-0 overflow-hidden rounded">
            <img
              src={noticia.imagem_capa}
              alt={noticia.titulo}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold leading-tight text-white group-hover:text-[#F5C800] transition-colors line-clamp-3">
            {noticia.titulo}
          </h3>
          <span className="text-white/40 text-xs">{formatarData(noticia.criado_em)}</span>
        </div>
      </Link>
    )
  }

  if (destaque) {
    return (
      <Link href={`/noticias/${noticia.slug}`} className="group block">
        <article className="border border-white/10 rounded-lg overflow-hidden hover:border-[#F5C800]/50 transition-colors">
          {noticia.imagem_capa && (
            <div className="w-full h-56 overflow-hidden">
              <img
                src={noticia.imagem_capa}
                alt={noticia.titulo}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <div className="p-5 flex flex-col gap-3">
            <h2 className="text-xl font-bold leading-tight text-white group-hover:text-[#F5C800] transition-colors">
              {noticia.titulo}
            </h2>
            {noticia.resumo && (
              <p className="text-white/60 text-sm line-clamp-2">{noticia.resumo}</p>
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

  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block">
      <article className="border border-white/10 rounded-lg overflow-hidden hover:border-[#F5C800]/50 transition-colors">
        {noticia.imagem_capa && (
          <div className="w-full h-48 overflow-hidden">
            <img
              src={noticia.imagem_capa}
              alt={noticia.titulo}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-5 flex flex-col gap-3">
          <h2 className="text-lg font-bold leading-tight text-white group-hover:text-[#F5C800] transition-colors">
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
