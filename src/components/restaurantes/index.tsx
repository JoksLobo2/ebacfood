import Tag from '../Tag'
import {
  Card,
  CardDescription,
  CardTitle,
  CardButton,
  Infos,
  Ranking,
  CardIcon,
  TitleContainer,
  StyledLink
} from './styles'

type Props = {
  title: string
  description: string
  rate: string
  infos: string[]
  image: string
  icon: string
}

const Restaurantes = ({
  title,
  description,
  infos,
  image,
  rate,
  icon
}: Props) => (
  <Card>
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
        <CardIcon src={icon} />
      </Ranking>
    </TitleContainer>
    <CardDescription>{description}</CardDescription>
    <CardButton type="button">
      <StyledLink to="/restaurante">Saiba mais</StyledLink>
    </CardButton>
  </Card>
)
export default Restaurantes
