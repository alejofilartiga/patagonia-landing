import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

/* *{
  border: 1px solid red;   

} */

  *{
    user-select: none;
  }



    html{
      scroll-behavior: smooth;
    }

    body {
    margin: 0;
    padding: 0;
    font-optical-sizing: auto;
    font-weight: 100;
    font-style: normal;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    &&-webkit-scrollbar {
      width: var(--sb-size)
    }

    &&-webkit-scrollbar-track {
      background: var(--sb-track-color);
      border-radius: 1px;
    }

    }

  body::-webkit-scrollbar {
    width: var(--sb-size)
  }

  body::-webkit-scrollbar-thumb {
    background: var(--sb-thumb-color);
    border-radius: 1px;
    .scrollbar {
  }

    @supports not selector(::-webkit-scrollbar) {
        body {
          scrollbar-color: var(--sb-thumb-color)
                          var(--sb-track-color);
        }
    }

    a {
    text-decoration: none;
    color: white;
    }

    a:visited {
    color: white;
    }

    li {
    list-style: none;
    }
}
`;