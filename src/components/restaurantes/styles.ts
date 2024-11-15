import styled from 'styled-components'
import { cores } from '../../styles'

export const ListContainer = styled.section`
  width: 1024px;
  height: 1290px;
  margin-top: 80px;
  margin-left: 171px;
  border: 1px;
`
export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
`
export const Item = styled.li`
  background-color: ${cores.branco};
  max-width: 472px;
  width: 100%;
  height: 398px;
  margin-bottom: 48px;
  border: 1px solid ${cores.rosa};
`
export const ItemImg = styled.img`
  max-width: 472px;
  width: 100%;
  height: 217px;
`
export const ItemTitle = styled.h3`
  font-size: 18px;
  line-height: 21px;
  margin-top: 8px;
  margin-left: 8px;
`
export const Itemtext = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 48px;
`
