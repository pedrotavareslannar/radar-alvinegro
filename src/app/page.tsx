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
  const [destaque, ...demais] = noticias

  return (
    <main className="flex flex-col min-h-screen bg-[#0D0D0D] text-white">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-10 w-full flex-1">
        {noticias.length === 0 ? (
          <div className="text-center py-32 text-white/40">
            <p className="text-lg">Nenhuma notícia publicada ainda.</p>
          </div>
        ) : (
          <>
            {destaque && (
              <div className="mb-8">
                <CardNoticia noticia={destaque} destaque />
              </div>
            )}
            {demais.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {demais.map((noticia) => (
                  <CardNoticia key={noticia.id} noticia={noticia} />
                ))}
              </div>
            )}
          </>
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
