import { breakpoints } from "brown-university-styles";
import styled from "styled-components";

const SelectWrapper = styled.div`
  @media (min-width: ${breakpoints.md}px) {
    flex: 1;
    margin-left: -15px;
  }
`;

export default SelectWrapper;
