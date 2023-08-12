import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const Services = styled.section`
  h2 {
    margin: 2rem 0;
  }
`;

export const Card = styled.div`
  padding: 0.5rem;
  h3 {
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  div {
    width: 100%;
    height: 25rem;
    border-radius: 10px;
    
    @media (max-width: ${breakpoints.tablet}) {
      padding: 0.5rem;
      height: auto;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }

  button {
    margin-top: 2rem;
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    background: ${colors.blue200};
    border: ${colors.blue200};
    border-radius: 8px;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;
