import styled from "styled-components";
import { breakpoints, colors } from "../../styles";


export const AboutContainer = styled.section`
  background: ${colors.blue200};
  padding: 5rem;


  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  p {
    font-size: 1.2rem;
    margin: 2rem 0;
    width: 50%;

    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
  }
` 

export const Banner = styled.img`
 width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: ${breakpoints.tablet}) {
  
    max-width: 100%;
    height: auto;
  
}


`