import { breakpoints } from "brown-university-styles";
import styled from "styled-components";

const AppWrapper = styled.div`
  padding: 0 10px;

  @media (min-width: ${breakpoints.md}px) {
    padding: 0;
  }
`;
export default AppWrapper;
