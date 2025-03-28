import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    margin-left: 60px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    word-wrap: break-word;
    padding: 20px;
  }

  icon {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`
