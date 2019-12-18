import { breakpoints } from "brown-university-styles";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 0 10px;
  margin: 40px 0;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0;
    margin: 60px 0;
  }

  @media (min-width: ${breakpoints.lg}px) {
    padding: 0 11.25%;
    margin: 80px 0;
  }
`;
export default AppWrapper;
