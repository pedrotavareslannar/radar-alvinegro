import { supabase } from '@/lib/supabase'
import type { Noticia } from '@/lib/types'
import Header from '@/components/header'
import CardNoticia from '@/components/card-noticia'

async function buscarNoticias(): Promise<Noticia[]> {
  const { data } = await supabase
    .from('noticias')
    .select('*')
    .eq('publicado', true)
    .order('criado_em', { ascending: false })
    .limit(20)

  return data ?? []
}

export default async function Home() {
  const noticias = await buscarNoticias()
  const destaques = noticias.slice(0, 4)
  const demais = noticias.slice(4)

  return (
    <main className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-10 w-full flex-1">
        {noticias.length === 0 ? (
          <div className="text-center py-32 text-white/40">
            <p className="text-lg">Nenhuma notícia publicada ainda.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* 4 destaques à esquerda */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {destaques.map((noticia, i) => (
                <CardNoticia key={noticia.id} noticia={noticia} destaque={i === 0} />
              ))}
            </div>

            {/* Demais notícias à direita */}
            {demais.length > 0 && (
              <aside className="lg:w-72 flex flex-col gap-4">
                {demais.map((noticia) => (
                  <CardNoticia key={noticia.id} noticia={noticia} compacto />
                ))}
              </aside>
            )}
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Radar Alvinegro. Todos os direitos reservados.
        </div>
      </footer>
    </main>
  )
}
