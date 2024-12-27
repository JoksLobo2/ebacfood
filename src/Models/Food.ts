class Food {
  id: number
  titulo: string
  destacado?: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }

  constructor(
    id: number,
    titulo: string,
    descricao: string,
    tipo: string,
    avaliacao: number,
    capa: string,
    cardapio: {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ) {
    this.id = id
    this.titulo = titulo
    this.descricao = descricao
    this.tipo = tipo
    this.avaliacao = avaliacao
    this.capa = capa
    this.cardapio = cardapio
  }
}

export default Food
