import styled from 'styled-components'
import { breakpoints, colours } from '../../styles'
import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

export const Card = styled(Link)`
  background-color: ${colours.white};
  margin-bottom: 48px;
  border: 1px solid ${colours.pink};
  max-width: 472px;
  width: 100%;
  height: 410px;
  position: relative;
  text-decoration: none;
  color: ${colours.pink};
  display: block;

  img {
    display: block;
    width: 100%;
    height: 217px;
    object-fit: cover;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
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
  background-color: ${colours.pink};
  color: ${colours.white};
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
  color: ${colours.pink};
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  display: flex;
  align-items: center;

  img {
    width: 21px;
    height: 21px;
    margin-left: 8px;
  }
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
