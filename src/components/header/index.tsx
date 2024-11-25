import logo from '../../assets/images/logo.png'
import { HeaderBar, Title, Logo } from './styles'
import { Link } from 'react-router-dom'

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
