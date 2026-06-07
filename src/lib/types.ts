export type Noticia = {
  id: string
  titulo: string
  slug: string
  conteudo: string | null
  resumo: string | null
  categoria: string | null
  imagem_capa: string | null
  autor: string | null
  publicado: boolean
  criado_em: string
  atualizado_em: string
}
