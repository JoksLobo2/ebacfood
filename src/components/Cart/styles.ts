import styled from 'styled-components'
import { cores } from '../../styles'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${cores.rosa};
  z-index: 1;
  padding: 32px 8px 16px 8px;
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
    height: 24px;
    border: none;
    background-color: ${cores.branco};
    color: ${cores.rosa};
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
`
export const Prices = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: ${cores.branco};
`
export const PricesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
export const CartItem = styled.li`
  background-color: ${cores.branco};
  display: flex;
  padding: 8px;
  margin-bottom: 16px;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 18px;
    font-weight: 900;
    line-height: 22px;
    margin-bottom: 16px;
    margin-left: 8px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    margin-left: 8px;
    display: block;
  }

  button {
    background-image: url(${lixeira});
    background-repeat: no-repeat;
    width: 16px;
    height: 16px;
    position: absolute;
    bottom: 0;
    right: 0;
    margin: 8px;
  }
`
