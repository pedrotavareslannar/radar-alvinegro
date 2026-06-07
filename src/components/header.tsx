import Link from 'next/link'

const categorias = ['Transferências', 'Jogos', 'Clube', 'Bastidores', 'Opinião']

export default function Header() {
  return (
    <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0D0D0D]/95 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="w-2 h-8 bg-[#F5C800] rounded-sm" />
          <span className="text-2xl font-bold tracking-tight uppercase text-white">
            Radar Alvinegro
          </span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm text-white/70">
          {categorias.map((cat) => (
            <Link
              key={cat}
              href={`/categoria/${cat.toLowerCase()}`}
              className="hover:text-[#F5C800] transition-colors"
            >
              {cat}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
