import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @import url('https://rsms.me/inter/inter.css');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ::placeholder {
    color: ${({ theme }) => theme.colors.grays.med};
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.black};
    font-size: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`
