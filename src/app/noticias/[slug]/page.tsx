export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import type { Noticia } from '@/lib/types'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

async function buscarNoticia(slug: string): Promise<Noticia | null> {
  const { data } = await supabase.from('noticias').select('*').eq('slug', slug).eq('publicado', true).single()
  return data
}

async function buscarRelacionadas(categoria: string, slugAtual: string): Promise<Noticia[]> {
  const { data } = await supabase.from('noticias').select('*').eq('publicado', true).eq('categoria', categoria).neq('slug', slugAtual).limit(3)
  return data ?? []
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const noticia = await buscarNoticia(slug)
  if (!noticia) return {}
  return {
    title: `${noticia.titulo} — Radar Atleticano`,
    description: noticia.resumo ?? undefined,
    openGraph: { title: noticia.titulo, description: noticia.resumo ?? undefined, images: noticia.imagem_capa ? [noticia.imagem_capa] : [] },
  }
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

export default async function PaginaNoticia({ params }: Props) {
  const { slug } = await params
  const noticia = await buscarNoticia(slug)
  if (!noticia) notFound()

  const relacionadas = await buscarRelacionadas(noticia.categoria ?? '', slug)

  return (
    <main className="flex flex-col min-h-screen" style={{ background: 'var(--surface-base)' }}>
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-12 w-full">

        {/* Kicker (categoria) */}
        {noticia.categoria && (
          <span className="inline-block text-xs font-black uppercase mb-4 px-2.5 py-1"
            style={{ letterSpacing: '0.15em', color: 'var(--preto)', background: 'var(--ouro)', borderRadius: 'var(--radius-sm)' }}>
            {noticia.categoria}
          </span>
        )}

        {/* Título */}
        <h1 className="font-black text-4xl leading-tight mb-5" style={{ letterSpacing: '-0.02em', color: 'var(--text-strong)' }}>
          {noticia.titulo}
        </h1>

        {/* Resumo (gold-ruled standfirst) */}
        {noticia.resumo && (
          <p className="text-lg leading-relaxed mb-6 pl-4"
            style={{ color: 'var(--text-secondary)', borderLeft: '4px solid var(--ouro)' }}>
            {noticia.resumo}
          </p>
        )}

        {/* Byline */}
        <div className="flex items-center gap-2 text-sm pb-8 mb-8" style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border)' }}>
          {noticia.autor && <span>{noticia.autor}</span>}
          {noticia.autor && <span>·</span>}
          <span>{formatarData(noticia.criado_em)}</span>
        </div>

        {/* Imagem hero */}
        {noticia.imagem_capa && (
          <div className="mb-8 overflow-hidden" style={{ borderRadius: 'var(--radius-md)', aspectRatio: '16/9' }}>
            <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover object-top" />
          </div>
        )}

        {/* Conteúdo */}
        {noticia.conteudo && (
          <div
            className="prose prose-invert prose-lg max-w-none"
            style={{ lineHeight: 1.7 }}
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />
        )}
      </article>

      {/* Leia também */}
      {relacionadas.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 pb-16 w-full">
          <div className="flex items-center gap-3 mb-6" style={{ borderTop: '1px solid var(--border)', paddingTop: 32 }}>
            <span className="w-1 h-5 rounded-sm" style={{ background: 'var(--ouro)' }} />
            <h2 className="text-base font-black uppercase" style={{ color: 'var(--text-strong)' }}>Leia também</h2>
          </div>
          <div className="flex flex-col gap-4">
            {relacionadas.map(n => (
              <a key={n.id} href={`/noticias/${n.slug}`} className="group flex gap-4 items-start ra-leia"
                style={{ borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
                {n.imagem_capa && (
                  <img src={n.imagem_capa} alt={n.titulo} className="w-24 h-16 object-cover object-top rounded shrink-0" style={{ borderRadius: 'var(--radius-sm)' }} />
                )}
                <div className="flex flex-col gap-1">
                  {n.categoria && <span className="text-xs font-bold uppercase" style={{ letterSpacing: '0.1em', color: 'var(--ouro)' }}>{n.categoria}</span>}
                  <h3 className="text-sm font-semibold leading-snug ra-leia-title transition-colors duration-150" style={{ color: 'var(--text-strong)' }}>{n.titulo}</h3>
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{formatarData(n.criado_em)}</span>
                </div>
                <style>{`.ra-leia:hover .ra-leia-title{color:var(--ouro)!important}`}</style>
              </a>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
