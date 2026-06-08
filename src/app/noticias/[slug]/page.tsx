export const dynamic = 'force-dynamic'

import { supabase } from '@/lib/supabase'
import type { Noticia } from '@/lib/types'
import Header from '@/components/header'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

type Props = { params: Promise<{ slug: string }> }

async function buscarNoticia(slug: string): Promise<Noticia | null> {
  const { data } = await supabase
    .from('noticias')
    .select('*')
    .eq('slug', slug)
    .eq('publicado', true)
    .single()

  return data
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const noticia = await buscarNoticia(slug)
  if (!noticia) return {}

  return {
    title: `${noticia.titulo} — Radar Alvinegro`,
    description: noticia.resumo ?? undefined,
    openGraph: {
      title: noticia.titulo,
      description: noticia.resumo ?? undefined,
      images: noticia.imagem_capa ? [noticia.imagem_capa] : [],
    },
  }
}

function formatarData(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export default async function PaginaNoticia({ params }: Props) {
  const { slug } = await params
  const noticia = await buscarNoticia(slug)

  if (!noticia) notFound()

  return (
    <main className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      <Header />

      <article className="max-w-3xl mx-auto px-4 py-12 w-full">
        {noticia.categoria && (
          <span className="text-[#F5C800] text-xs font-bold uppercase tracking-widest">
            {noticia.categoria}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-4 mb-6">
          {noticia.titulo}
        </h1>

        {noticia.resumo && (
          <p className="text-xl text-white/70 mb-6 leading-relaxed border-l-4 border-[#F5C800] pl-4">
            {noticia.resumo}
          </p>
        )}

        <div className="flex items-center gap-3 text-white/40 text-sm mb-8 pb-8 border-b border-white/10">
          {noticia.autor && <span>{noticia.autor}</span>}
          {noticia.autor && <span>·</span>}
          <span>{formatarData(noticia.criado_em)}</span>
        </div>

        {noticia.imagem_capa && (
          <img
            src={noticia.imagem_capa}
            alt={noticia.titulo}
            className="w-full rounded-lg mb-8 object-cover max-h-[480px]"
          />
        )}

        {noticia.conteudo && (
          <div
            className="prose prose-invert prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />
        )}
      </article>

      <footer className="border-t border-white/10 py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Radar Alvinegro. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  )
}
