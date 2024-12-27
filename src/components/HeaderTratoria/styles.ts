import styled from 'styled-components'
import vetor from '../../assets/images/Vector.png'
import { cores } from '../../styles'

export const HeaderBar = styled.div`
  background-image: url(${vetor});
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${cores.rosaClaro};
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
