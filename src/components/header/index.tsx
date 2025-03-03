import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import { HeaderBar, Title, Logo } from './styles'

const Header = () => (
  <>
    <HeaderBar>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </HeaderBar>
  </>
)

export default Header
