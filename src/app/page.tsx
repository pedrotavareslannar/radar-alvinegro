export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import type { Noticia } from '@/lib/types'
import Header from '@/components/header'
import HeroCarousel from '@/components/hero-carousel'
import ProximosJogos from '@/components/proximos-jogos'
import Classificacao from '@/components/classificacao'
import Footer from '@/components/footer'
import ArenaCarousel from '@/components/arena-carousel'

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
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
}

function CardNoticia({ noticia }: { noticia: Noticia }) {
  return (
    <Link href={`/noticias/${noticia.slug}`} className="group block ra-card" style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', overflow: 'hidden' }}>
      {noticia.imagem_capa ? (
        <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <img src={noticia.imagem_capa} alt={noticia.titulo} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style={{ objectPosition: noticia.focal_point ?? '50% 30%' }} />
        </div>
      ) : (
        <div className="flex items-center justify-center" style={{ aspectRatio: '4/3', background: 'linear-gradient(135deg,#161616 0%,#0D0D0D 100%)' }}>
          <span className="w-2.5 rounded-sm opacity-40" style={{ height: 80, background: 'var(--ouro)' }} />
        </div>
      )}
      <div className="p-5 flex flex-col gap-2">
        {noticia.categoria && (
          <span className="text-xs font-bold uppercase" style={{ letterSpacing: '0.12em', color: 'var(--ouro)' }}>{noticia.categoria}</span>
        )}
        <h3 className="font-bold text-base leading-snug ra-card-title" style={{ color: 'var(--text-strong)' }}>{noticia.titulo}</h3>
        {noticia.resumo && <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>{noticia.resumo}</p>}
        <span className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{noticia.autor && <>{noticia.autor} · </>}{formatarData(noticia.criado_em)}</span>
      </div>
      <style>{`.ra-card:hover{border-color:rgba(245,200,0,0.5)!important}.ra-card:hover .ra-card-title{color:var(--ouro)!important}`}</style>
    </Link>
  )
}

function SectionHeading({ title, action, href }: { title: string; action?: string; href?: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-3">
        <span className="w-1 h-5 rounded-sm" style={{ background: 'var(--ouro)' }} />
        <h2 className="text-lg font-black uppercase" style={{ color: 'var(--text-strong)' }}>{title}</h2>
      </div>
      {action && href && (
        <Link href={href} className="text-xs font-bold uppercase hover:text-yellow-400 transition-colors" style={{ letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
          + {action}
        </Link>
      )}
    </div>
  )
}

export default async function Home() {
  const noticias = await buscarNoticias()
  const heroSlides = noticias.slice(0, 3)
  const gridNoticias = noticias.slice(0, 3)
  const maisNoticias = noticias.slice(3)

  return (
    <main className="flex flex-col min-h-screen" style={{ background: 'var(--surface-base)' }}>
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8 w-full flex-1 flex flex-col gap-14">

        {/* 1. HERO + PRÓXIMOS JOGOS (próximos só no desktop; no mobile vai junto da classificação) */}
        <section className="grid gap-6 items-stretch grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px]">
          <HeroCarousel slides={heroSlides} />
          <div className="hidden lg:block">
            <ProximosJogos />
          </div>
        </section>

        {/* 2. NOTÍCIAS + CLASSIFICAÇÃO */}
        <section>
          <SectionHeading title="Notícias" action="Ver todas" href="/noticias" />
          <div className="grid gap-6 items-start grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {gridNoticias.length > 0
                ? gridNoticias.map(n => <CardNoticia key={n.id} noticia={n} />)
                : <p className="col-span-3 text-center py-16" style={{ color: 'var(--text-muted)' }}>Nenhuma notícia publicada ainda.</p>
              }
            </div>
            <div className="flex flex-col gap-6">
              <div className="lg:hidden">
                <ProximosJogos />
              </div>
              <Classificacao />
            </div>
          </div>
        </section>

        {/* 3. MAIS NOTÍCIAS */}
        {maisNoticias.length > 0 && (
          <section>
            <SectionHeading title="Mais notícias" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {maisNoticias.map(n => <CardNoticia key={n.id} noticia={n} />)}
            </div>
          </section>
        )}

        {/* 4. ARENA MRV — carrossel */}
        <section>
          <ArenaCarousel />
        </section>

      </div>

      <Footer />
    </main>
  )
}
