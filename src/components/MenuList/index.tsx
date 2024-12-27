import { Card, CardImg, CardTitle, CardDescription, CardButton } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const MenuL = ({ title, description, image }: Props) => (
  <div className="container">
    <Card>
      <CardImg src={image} alt="foto de uma pizza" />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardButton>Adicionar ao carrinho</CardButton>
    </Card>
  </div>
)

export default MenuL
