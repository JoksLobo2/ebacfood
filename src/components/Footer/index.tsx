import logo from '../../assets/images/logo.png'
import tweet from '../../assets/images/tweet.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/facebook.png'

import {
  FooterContainer,
  SocialList,
  SocialListItem,
  LogoFooter,
  FooterText
} from './styles'

const Footer = () => (
  <FooterContainer>
    <div>
      <LogoFooter src={logo} />
      <SocialList>
        <SocialListItem>
          <img src={insta} alt="logo do instagram" />
        </SocialListItem>

        <SocialListItem>
          <img src={face} alt="logo do facebook" />
        </SocialListItem>

        <SocialListItem>
          <img src={tweet} alt="logo do Twitter" />
        </SocialListItem>
      </SocialList>
      <FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </FooterText>
    </div>
  </FooterContainer>
)

export default Footer
