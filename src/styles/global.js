import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/work-sans-v8-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/work-sans-v8-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/work-sans-v8-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/work-sans-v8-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  @font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 600;
    src: local(''),
        url('/fonts/work-sans-v8-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
        url('/fonts/work-sans-v8-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }

    text {
      font-family: ${theme.font.family};
    }

    ::-webkit-scrollbar {
      width: 8px;
      height: 10px;
    }
    ::-webkit-scrollbar-track {
      background: ${theme.colors.lightGray};
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: ${theme.colors.primary};
    }
    ::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.primary};
    }
  `}
`

export default GlobalStyles
