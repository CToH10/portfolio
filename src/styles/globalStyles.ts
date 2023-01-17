import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   --color-black: #000000;
   --color-black-80: #080808;
   --color-grey-100: #616161;
   --color-grey-90: #7A7A7A;
   --color-grey-80: #E0E0E0;
   --color-grey-70: #C7C7C7;
   --color-grey-60: #EDEDED;
   --color-blue: #000012;
   --color-yellow: #F6F3A6;

   --color-grey-shadow: #3D3D3D;


   --font-size-40: 2.5rem;
   --font-size-36: 2.25rem;
   --font-size-32: 2rem;
   --font-size-24: 1.5rem;
   --font-size-22: 1.375rem;
   --font-size-20: 1.25;
   --font-size-16: 1rem;
   --font-size-14: 0.875rem;
   --font-size-12: 0.75rem;
}

* {
    font-family: 'Roboto', sans-serif;
}

body, header, nav, h1, h2, h3, h4, ul, li, p, button {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}

body {
    background-color: var(--color-black-80);
}

button {
    cursor: pointer;
}

`;
