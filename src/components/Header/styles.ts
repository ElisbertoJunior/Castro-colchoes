import styled from "styled-components";
import { breakpoints, colors } from "../../styles";

export const HeaderContainer = styled.header`
  background: ${colors.blue400};
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: ${colors.blue700};
    
    @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }

  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;
    
  }
`