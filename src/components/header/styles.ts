import styled from 'styled-components'
import { breakpoints, colours } from '../../styles'
import vetor from '../../assets/images/Vector.png'

export const HeaderBar = styled.header`
  background-image: url(${vetor});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colours.lightPink};
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: visible;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 10px;
  }
`

export const Logo = styled.img`
  width: 126px;
  margin-top: 40px;
`

export const Title = styled.h1`
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;
  margin-top: 180px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 100px;
    font-size: 28px;
  }
`
