import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Radar Atleticano',
  description: 'Portal de notícias sobre o Clube Atlético Mineiro — transferências, resultados, bastidores e movimentações do clube.',
  openGraph: {
    title: 'Radar Atleticano',
    description: 'Tudo sobre o Galo em um só lugar.',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className={`${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
