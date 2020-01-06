import { colors, typography } from "brown-university-styles";
import styled from "styled-components";

const AppHeading = styled.h2`
  font-family: ${typography.sans};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.69231;
  border-bottom: 2px solid rgb(240, 243, 245);
  color: ${colors.brown};
`;

export default AppHeading;
