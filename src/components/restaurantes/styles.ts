import styled from 'styled-components'
import { cores } from '../../styles'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  border: 1px solid ${cores.rosa};
  width: 472px;
  height: 410px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`
export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  display: block;
`
export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  display: block;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
`
export const CardButton = styled.button`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  width: 82px;
  height: 24px;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  border: none;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 4px 6px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Ranking = styled.div`
  color: ${cores.rosa};
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;
`
export const CardIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 8px;
`
export const TitleContainer = styled.div`
  width: 460px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`
export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
