import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --fontFamily: 'Outfit', sans-serif;
    --white: hsl(0, 0%, 100%);
    --lightGray: hsl(212, 45%, 89%);
    --grayishBlue: hsl(220, 15%, 55%);
    --darkBlue: hsl(218, 44%, 22%);
    --fs-body: 15px;
    --media-mobile: 375px;
    --media-desktop: 1440px;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: var(--fontFamily);
    font-size: var(--fs-body);
  }
`;

export default GlobalStyle;
