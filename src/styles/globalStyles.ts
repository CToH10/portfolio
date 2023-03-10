import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
   --color-black: #1193C2;
   --color-black-80: #0B5975;
   --color-black-opaque: #00000033;
   --color-grey-100:
   #E0E0E0
    ;
   --color-grey-90:
    #EDEDED
   ;
   --color-grey-80: #E0E0E0;
   --color-grey-70: #C7C7C7;
   --color-grey-60: #EDEDED;
   --color-blue: #000012;
   --color-yellow: #F6F3A6;

   --color-grey-shadow: #3D3D3D;


   --font-black: #000000;
   --font-black-80: #0B5975;    
   --font-grey-100: #616161;
   --font-grey-90: #7A7A7A;
   --font-grey-80: #E0E0E0;
   --font-grey-70: #C7C7C7;
   --font-grey-60: #EDEDED;
   --font-blue: #000012;
   --font-yellow: #F6F3A6;

   --color-grey-shadow: #0B5975;


   --font-size-40: 2.5rem;
   --font-size-36: 2.25rem;
   --font-size-32: 2rem;
   --font-size-24: 1.5rem;
   --font-size-22: 1.375rem;
   --font-size-20: 1.25;
   --font-size-16: 1rem;
   --font-size-14: 0.875rem;
   --font-size-12: 0.75rem;

   --semiBold: 600;
   --regular: 500;
   --light: 400;

   --radius: 4px;
   --image-radius: 100%;

    --moz-gradient-grey-to-black: -moz-linear-gradient(45deg, var(--color-grey-90) 0%, var(--color-grey-100) 50%, var(--color-black) 100%);
    --webkit-gradient-grey-to-black: -webkit-linear-gradient(45deg, var(--color-grey-90) 0%, var(--color-grey-100) 50%, var(--color-black) 100%);
    --gradient-grey-to-black: linear-gradient(45deg, var(--color-grey-90) 0%, var(--color-grey-100) 50%, var(--color-black) 100%);


}

* {
    font-family: 'Roboto', sans-serif;
}

body, header, nav, h1, h2, h3, h4, ul, li, p, button, a, figure, figcaption, img {
    list-style: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
}


button {
    cursor: pointer;
}

`;
