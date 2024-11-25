class Restaurante {
  title: string
  icon: string
  rate: string
  description: string
  image: string
  infos: string[]
  id: number

  constructor(
    id: number,
    title: string,
    icon: string,
    rate: string,
    description: string,
    image: string,
    infos: string[]
  ) {
    this.id = id
    this.title = title
    this.icon = icon
    this.rate = rate
    this.description = description
    this.image = image
    this.infos = infos
  }
}

export default Restaurante
