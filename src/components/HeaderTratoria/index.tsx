import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import logo from '../../assets/images/logo.png'

import { add, open, close } from '../../store/reducers/cart'

import { HeaderBar, SectionTitle, CartButton } from './styles'

const RestauranteHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <>
      <HeaderBar>
        <div>
          <SectionTitle>Restaurantes</SectionTitle>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <CartButton onClick={openCart}>0 produto(s) no carrinho</CartButton>
        </div>
      </HeaderBar>
    </>
  )
}

export default RestauranteHeader
