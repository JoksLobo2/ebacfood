import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${cores.rosaClaro};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  div {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
  }
`

export const LogoFooter = styled.img`
  max-width: 125px;
  height: 58px;
  width: 100%;
`

export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 80px;
`
export const SocialListItem = styled.li`
  max-width: 24px;
  height: 24px;
  width: 100%;
`
export const FooterText = styled.p`
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  align-items: center;
`
