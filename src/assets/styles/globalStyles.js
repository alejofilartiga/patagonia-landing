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