export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import type { Noticia } from '@/lib/types'
import Header from '@/components/header'
import Link from 'next/link'

async function buscarNoticias(): Promise<Noticia[]> {
  const { data } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicado', true)
    .order('criado_em', { ascending: false })
    .limit(20)
  return data ?? []
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

// Card destaque principal (ocupa metade da largura)
function CardDestaque({ noticia }: { noticia: Noticia }) {
  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block h-full">
      <article className="relative h-full min-h-[380px] rounded-lg overflow-hidden bg-white/5 border border-white/10 hover:border-[#F5C800]/50 transition-colors flex flex-col">
        {noticia.imagem_capa && (
          <div className="h-56 overflow-hidden">
            <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        <div className="p-5 flex flex-col gap-2 flex-1">
          {noticia.categoria && (
            <span className="text-[#F5C800] text-xs font-bold uppercase tracking-widest">{noticia.categoria}</span>
          )}
          <h2 className="text-xl font-bold leading-snug text-white group-hover:text-[#F5C800] transition-colors">
            {noticia.titulo}
          </h2>
          {noticia.resumo && (
            <p className="text-white/55 text-sm line-clamp-2 mt-1">{noticia.resumo}</p>
          )}
          <span className="text-white/35 text-xs mt-auto">{formatarData(noticia.criado_em)}</span>
        </div>
      </article>
    </Link>
  )
}

// Card médio (grade 3 colunas)
function CardMedio({ noticia }: { noticia: Noticia }) {
  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block">
      <article className="rounded-lg overflow-hidden border border-white/10 hover:border-[#F5C800]/50 transition-colors flex flex-col h-full bg-white/5">
        {noticia.imagem_capa && (
          <div className="h-36 overflow-hidden">
            <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
        )}
        <div className="p-4 flex flex-col gap-2 flex-1">
          {noticia.categoria && (
            <span className="text-[#F5C800] text-xs font-bold uppercase tracking-widest">{noticia.categoria}</span>
          )}
          <h3 className="text-base font-bold leading-snug text-white group-hover:text-[#F5C800] transition-colors">
            {noticia.titulo}
          </h3>
          <span className="text-white/35 text-xs mt-auto">{formatarData(noticia.criado_em)}</span>
        </div>
      </article>
    </Link>
  )
}

// Item lista lateral
function ItemLista({ noticia }: { noticia: Noticia }) {
  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block">
      <article className="flex gap-3 py-3 border-b border-white/10 last:border-0">
        {noticia.imagem_capa && (
          <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-20 h-14 object-cover rounded flex-shrink-0" />
        )}
        <div className="flex flex-col gap-1">
          {noticia.categoria && (
            <span className="text-[#F5C800] text-xs font-bold uppercase tracking-widest">{noticia.categoria}</span>
          )}
          <h4 className="text-sm font-semibold leading-snug text-white group-hover:text-[#F5C800] transition-colors line-clamp-2">
            {noticia.titulo}
          </h4>
          <span className="text-white/35 text-xs">{formatarData(noticia.criado_em)}</span>
        </div>
      </article>
    </Link>
  )
}

export default async function Home() {
  const noticias = await buscarNoticias()

  const [n1, n2, n3, n4, n5, ...resto] = noticias

  return (
    <main className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 w-full flex-1">

        {noticias.length === 0 ? (
          <div className="text-center py-32 text-white/40">
            <p className="text-lg">Nenhuma notícia publicada ainda.</p>
          </div>
        ) : (
          <>
            {/* Bloco principal: 2 destaques + lista lateral */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
              {/* Destaques */}
              <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {n1 && <CardDestaque noticia={n1} />}
                {n2 && <CardDestaque noticia={n2} />}
              </div>

              {/* Lista lateral */}
              <aside className="flex flex-col">
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#F5C800] border-b border-[#F5C800] pb-2 mb-2">
                  Últimas notícias
                </h2>
                {[n3, n4, n5].filter(Boolean).map((n) => (
                  <ItemLista key={n!.id} noticia={n!} />
                ))}
              </aside>
            </section>

            {/* Separador */}
            {resto.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1 h-5 bg-[#F5C800] rounded-sm" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-white/70">Mais notícias</h2>
                </div>

                {/* Grade 3 colunas */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {resto.map((n) => (
                    <CardMedio key={n.id} noticia={n} />
                  ))}
                </section>
              </>
            )}
          </div>
        )}
      </div>

      <footer className="border-t border-white/10 py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Radar Alvinegro. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  )
}
