import { createGlobalStyle } from 'styled-components'

export const colours = {
  pink: '#E66767',
  lightPink: '#FFEBD9',
  white: '#FFF8F2'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Roboto, sans-serif;
    text-decoration:none;
    list-style:none;
  }

  body{
    background-color:${colours.white};
    color:${colours.pink}
  }

  .container{
    max-width:1024px;
    width:100%;
    margin:0 auto;
  }
`
