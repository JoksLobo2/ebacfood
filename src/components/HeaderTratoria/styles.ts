import styled from 'styled-components'
import vetor from '../../assets/images/Vector.png'
import { breakpoints, colours } from '../../styles'

export const HeaderBar = styled.div`
  background-image: url(${vetor});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${colours.lightPink};
  width: 100%;
  height: 186px;
  display: flex;
  flex-direction: row;

  div {
    max-width: 1024px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
export const SectionTitle = styled.h3`
  font-size: 18px;
  line-height: 22px;
  font-weight: 900;
`
export const CartButton = styled.a`
  font-size: 18px;
  line-height: 22px;
  font-weight: 900;
  cursor: pointer;
`
export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colours.white};
`
export const Italiana = styled.h3`
  font-size: 32px;
  font-weight: 100;
  line-height: 38px;
  padding-top: 25px;
  padding-bottom: 156px;
`
export const RestauranteName = styled.h2`
  font-size: 32px;
  font-weight: 900;
  line-height: 38px;
  padding-bottom: 32px;
`
