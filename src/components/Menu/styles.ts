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

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
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
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    max-width: 480px;

    > div {
      display: flex;
      flex-direction: column;
      padding: 16px;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 16px; /* Adiciona espaçamento consistente entre elementos */
    }
  }

  @media (max-width: ${breakpoints.smartphone}) {
    max-width: 100%;
    padding: 16px;

    > div {
      padding: 16px;
    }

    > img {
      width: 100%;
      height: auto;
      margin: 0 auto 16px auto; /* Centraliza e adiciona espaçamento inferior */
    }
  }

  > div {
    display: flex;
    flex-direction: column; /* Pilha os elementos no mobile */
    padding: 16px 16px 32px;
    background-color: ${colours.pink};
    color: ${colours.white};

    > img {
      width: 280px;
      height: 280px;
      margin-right: 24px;
      object-fit: cover;

      @media (max-width: ${breakpoints.tablet}) {
        width: 100%; /* Ajusta a imagem para ocupar toda a largura no mobile */
        height: auto;
        margin: 0 auto 16px; /* Centraliza e adiciona espaçamento */
      }
    }

    div {
      display: flex;
      flex-direction: column;

      div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2 {
          font-size: 18px; /* Reduz a fonte no mobile */
          font-weight: 900;
          margin-top: 16px;
          text-align: center; /* Centraliza o texto */
        }

        img {
          height: 16px;
          width: 16px;
          margin: 8px;
          cursor: pointer;
        }
      }

      p {
        margin: 8px 0;
        font-size: 14px;
        text-align: justify; /* Melhora a leitura no mobile */
      }

      button {
        border: none;
        padding: 12px 16px; /* Aumenta a área de clique */
        font-size: 14px;
        font-weight: 700;
        background-color: ${colours.white};
        color: ${colours.pink};
        cursor: pointer;
        align-self: center; /* Centraliza o botão no mobile */
      }
    }
  }
`

export const ModalImg = styled.img`
  height: 280px;
  width: 280px;
  object-fit: cover;
`
