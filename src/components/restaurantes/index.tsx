import sushijpg from '../../assets/images/sushi.png'
import {
  ListContainer,
  List,
  Item,
  ItemImg,
  ItemTitle,
  Itemtext
} from './styles'

const Restaurantes = () => (
  <div>
    <ListContainer>
      <List>
        <Item>
          <ItemImg src={sushijpg} alt="" />
          <ItemTitle>Hioki Sushi</ItemTitle>
          <Itemtext>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </Itemtext>
        </Item>
      </List>
    </ListContainer>
  </div>
)
export default Restaurantes
