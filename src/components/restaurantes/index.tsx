import Tag from '../Tag'
import {
  Card,
  CardDescription,
  CardTitle,
  CardButton,
  Infos,
  Ranking,
  TitleContainer,
  StyledLink
} from './styles'

type Props = {
  title: string
  description: string
  rate: number
  infos: string[]
  image: string
  icon: string
  id: number
}

const Restaurantes = ({
  title,
  description,
  infos,
  image,
  rate,
  icon,
  id
}: Props) => {
  const getDescription = (description: string) => {
    if (description.length > 233) {
      return description.slice(0, 233) + '...'
    }

    return description
  }

  return (
    <Card to={`/restaurante/${id}`}>
      <img src={image} alt="Hioki Sushi" />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <TitleContainer>
        <CardTitle>{title}</CardTitle>
        <Ranking>
          {rate}
          <img src={icon} />
        </Ranking>
      </TitleContainer>
      <CardDescription>{getDescription(description)}</CardDescription>
      <CardButton type="button">
        <StyledLink to={`/restaurante/${id}`}>Saiba mais</StyledLink>
      </CardButton>
    </Card>
  )
}
export default Restaurantes
