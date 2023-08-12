import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeroContainer = styled.section`
  background: ${colors.blue400};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    margin-top: 4rem;
    font-size: 5.7rem;
    font-weight: bold;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 2.5rem;
    }
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    max-width: 50%;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 1rem;
      margin: 2rem 0;
      max-width: 80%;
    }
  }

  button {
    padding: 1rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    background: ${colors.blue200};
    border: ${colors.blue200};
    border-radius: 8px;
  }
`;
