import styled from 'styled-components'
import { breakpoints, colours } from '../../styles'

export const FoodList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-top: 56px;
  margin-bottom: 122px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`
export const ModalContent = styled.div`
  max-width: 1024px;
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  > div {
    display: flex;
    padding: 0 0 32px 32px;
    background-color: ${colours.pink};
    color: ${colours.white};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;
      margin-top: 32px;
    }

    div {
      display: block;

      div {
        display: flex;
        justify-content: space-between;

        h2 {
          font-size: 21px;
          font-weight: 900;
          margin-top: 32px;
        }

        img {
          height: 16px;
          width: 16px;
          margin: 8px;
          cursor: pointer;
        }
      }

      p {
        margin: 16px 0;
        font-size: 14px;
      }

      button {
        border: none;
        padding: 4px 7px;
        font-size: 14px;
        font-weight: 700;
        background-color: ${colours.white};
        color: ${colours.pink};
        cursor: pointer;
      }
    }
  }
`
export const ModalImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`
