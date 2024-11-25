import RestaurantesList from '../../components/RestaurantesList'
import Restaurante from '../../Models/Restaurante'
import star from '../../assets/images/estrela.png'
import sushi from '../../assets/images/sushi.png'
import pasta from '../../assets/images/lula.png'

const menu: Restaurante[] = [
  {
    id: 1,
    title: 'Hioki Sushi',
    icon: star,
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa']
  },
  {
    id: 2,
    title: 'La Dolce Vita Trattoria',
    icon: star,
    rate: '4,6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: pasta,
    infos: ['Italiana']
  },
  {
    id: 3,
    title: 'Hioki Sushi',
    icon: star,
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Japonesa']
  },
  {
    id: 4,
    title: 'Hioki Sushi',
    icon: star,
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Japonesa']
  },
  {
    id: 5,
    title: 'Hioki Sushi',
    icon: star,
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Japonesa']
  },
  {
    id: 6,
    title: 'Hioki Sushi',
    icon: star,
    rate: '4,9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushi,
    infos: ['Japonesa']
  }
]

const Home = () => (
  <>
    <RestaurantesList title="" restaurantes={menu} />
  </>
)

export default Home
