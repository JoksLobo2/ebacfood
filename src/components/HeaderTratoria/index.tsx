import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'

import { HeaderBar, SectionTitle } from './styles'

const RestauranteHeader = () => (
  <>
    <HeaderBar>
      <div>
        <SectionTitle>Restaurantes</SectionTitle>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <h3>0 produto(s) no carrinho</h3>
      </div>
    </HeaderBar>
  </>
)

export default RestauranteHeader
