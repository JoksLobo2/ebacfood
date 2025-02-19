import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CheckoutContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${cores.branco};
  display: none;
  justify-content: flex-end;
  position: fixed;

  &.is-open {
    display: flex;
  }
`

export const CheckoutCard = styled.div`
  background-color: ${cores.rosa};
  width: 360px;
  height: 1624px;
  position: relative;
  z-index: 2;
  padding: 32px 8px 0 8px;

  h2 {
    padding: 32px 0 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }

  p {
    padding-bottom: 24px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
  }
`

export const CheckoutButton = styled.button`
  width: 344px;
  height: 24px;
  margin-bottom: 8px;
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;
  cursor: pointer;
`
