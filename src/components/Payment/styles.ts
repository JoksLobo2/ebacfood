import styled from 'styled-components'
import { colours } from '../../styles'

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

export const PaymentContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${colours.white};
  display: none;
  justify-content: flex-end;
  position: fixed;

  &.is-open {
    display: flex;
  }

  h2 {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 16px;
  }
`

export const PaymentCard = styled.div`
  background-color: ${colours.pink};
  width: 360px;
  height: 1624px;
  position: relative;
  z-index: 2;
  padding: 32px 8px 0 8px;

  h2 {
    color: ${colours.white};
  }

  p {
    color: ${colours.white};
  }
`

export const InputGroup = styled.div`
  label {
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: ${colours.lightPink};
    margin-bottom: 8px;
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    background-color: ${colours.lightPink};
    border: none;
    margin-bottom: 8px;
  }
`
export const CardInput = styled.li`
  display: flex;
  gap: 32px;

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .card-number {
    width: 228px;
  }

  .cvv {
    width: 80px;
  }

  .expires {
    width: 155px;
  }
`

export const PaymentButton = styled.button`
  width: 344px;
  height: 24px;
  margin-bottom: 8px;
  background-color: ${colours.lightPink};
  color: ${colours.pink};
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  border: none;
  cursor: pointer;

  &.firstButton {
    margin-top: 24px;
  }
`
