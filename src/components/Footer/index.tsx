import logo from '../../assets/images/logo.png'
import tweet from '../../assets/images/tweet.png'
import insta from '../../assets/images/insta.png'
import face from '../../assets/images/facebook.png'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <div>
      <S.LogoFooter src={logo} />
      <S.SocialList>
        <S.SocialListItem>
          <img src={insta} alt="logo do instagram" />
        </S.SocialListItem>

        <S.SocialListItem>
          <img src={face} alt="logo do facebook" />
        </S.SocialListItem>

        <S.SocialListItem>
          <img src={tweet} alt="logo do Twitter" />
        </S.SocialListItem>
      </S.SocialList>
      <S.FooterText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade <br />
        dos produtos é toda do estabelecimento contratado.
      </S.FooterText>
    </div>
  </S.FooterContainer>
)

export default Footer
