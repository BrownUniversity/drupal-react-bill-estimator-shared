import { colors, typography } from "brown-university-styles";
import styled from "styled-components";

const AppHeading = styled.h2`
  border-bottom: 2px solid ${colors.lightGray};
  line-height: 1.69231;
  font-family: ${typography.sans};
  font-weight: 700;
`;

export default AppHeading;
