import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#fff',
  lightPink: '#FFF8F2',
  darkPink: '#E66767',
  pink: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background-color: ${colors.lightPink};
  }

  .container{
    width: 1024px;
    max-width: 100%;
    margin: 0 auto;
  }
`
