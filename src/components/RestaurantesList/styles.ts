import styled from 'styled-components'

export const Container = styled.section``

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  margin-top: 80px;

  icon {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
`
