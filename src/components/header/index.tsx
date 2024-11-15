import logo from '../../assets/images/logo.png'
import { HeaderBar, Title, Logo } from './styles'

const Header = () => (
  <>
    <HeaderBar>
      <Logo src={logo} />
      <Title>
        Viva experiências gastronômicas <br /> no conforto da sua casa
      </Title>
    </HeaderBar>
  </>
)

export default Header
