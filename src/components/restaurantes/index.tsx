import Tag from '../Tag'
import * as S from './styles'

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
    <S.Card to={`/restaurante/${id}`}>
      <img src={image} alt="Hioki Sushi" />
      <S.Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </S.Infos>
      <S.TitleContainer>
        <S.CardTitle>{title}</S.CardTitle>
        <S.Ranking>
          {rate}
          <img src={icon} />
        </S.Ranking>
      </S.TitleContainer>
      <S.CardDescription>{getDescription(description)}</S.CardDescription>
      <S.StyledLink to={`/restaurante/${id}`}>
        <S.CardButton type="button">Saiba mais</S.CardButton>
      </S.StyledLink>
    </S.Card>
  )
}
export default Restaurantes
