import { createGlobalStyle } from "styled-components";

export const colors = {
  blue700: "#295B80",
  blue200: "#9ED7FF",
  blue500: "#52B7FF",
  blue900: "#4D6A80",
  blue400: "#4191CC",
};

export const breakpoints = {
  desktop: "1024px",
  tablet: "768px",
};

const GlobalStyles = createGlobalStyle`
  *  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    
  }

  
  @media (max-width: ${breakpoints.tablet}) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-size: 1rem;
    -webkit-font-smoothing: antialiased;
     
    section {
      padding: 2rem 3rem;
    }

    h2 {
      font-size: 2.5rem;
    }
  }

  li {
    list-style-type: none;
  }
`;

export default GlobalStyles;
