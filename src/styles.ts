import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaro: '#FFEBD9',
  branco: '#FFF8F2'
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
    background-color:${cores.branco};
    color:${cores.rosa}
  }

  .container{
    max-width:1366px;
    width:100%;
    margin:0 auto;
  }
`
export const Container = styled.div`
  max-width: 1366px;
  height: 2148px;
  width: 100%;
  margin: 0 auto;
`
