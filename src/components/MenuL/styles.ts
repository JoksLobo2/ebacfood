import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  max-width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;
`
export const CardImg = styled.img`
  width: 100%;
  height: 167px;
`
export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  padding: 8px 0;
`
export const CardDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`
export const CardButton = styled.button`
  width: 100%;
  height: 24px;
  color: ${cores.rosa};
  background-color: ${cores.branco};
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
