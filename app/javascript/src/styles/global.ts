import { lighten } from "@mui/material"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
      outline: 0;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  html {
      --webkit-font-smoothing: antialiased;
      font-family: 'Roboto', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
      overflow: hidden;
  }

  ul {
    list-style: none;
  }
  nav {
    a {
      color: inherit;
    }
  }

  a {
    text-decoration: none;
  }

  p {
    
    a {
    /* color: ${({ theme }) => theme.palette.action.activatedOpacity}; */
    transition: 250ms all;
    position: relative;
    
    ::after {
      width: 100%;
      position: absolute;
      transform: scaleX(0);
      content: "";
      height: 1px;
      transition: 200ms all ease;
      bottom: 0;
      left: 0;
      background-color: ${({ theme }) =>
          lighten(theme.palette.primary.main, 0.35)};
    }

    &:hover {
      color: ${({ theme }) => lighten(theme.palette.primary.main, 0.35)};

      ::after {
        transform: scaleX(.98);
      }
    }
  }

}
`
