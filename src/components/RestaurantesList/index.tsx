import Restaurantes from '../restaurantes'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/lula.png'
import star from '../../assets/images/estrela.png'
import { List, Container } from './styles'

type Props = {
  title: string
}

const RestaurantesList = ({ title }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Restaurantes
          title="Hioki Sushi"
          icon={star}
          rate={['4,9']}
          description="Peça já o melhor da culinária japonesa no conforto
          da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
          Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={sushi}
          infos={['Destaque da semana', 'Japonesa']}
        />
        <Restaurantes
          title="La Dolce Vita Trattoria"
          icon={star}
          rate={['4,9']}
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas
          e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={pasta}
          infos={['Italiana']}
        />
        <Restaurantes
          title="Hioki Sushi"
          icon={star}
          rate={['4,9']}
          description="teste"
          image={sushi}
          infos={['Japonesa']}
        />
        <Restaurantes
          title="Hioki Sushi"
          icon={star}
          rate={['4,9']}
          description="teste"
          image={sushi}
          infos={['Japonesa']}
        />
        <Restaurantes
          title="Hioki Sushi"
          icon={star}
          rate={['4,9']}
          description="teste"
          image={sushi}
          infos={['Japonesa']}
        />
        <Restaurantes
          title="Hioki Sushi"
          icon={star}
          rate={['4,9']}
          description="teste"
          image={sushi}
          infos={['Japonesa']}
        />
      </List>
    </div>
  </Container>
)

export default RestaurantesList
