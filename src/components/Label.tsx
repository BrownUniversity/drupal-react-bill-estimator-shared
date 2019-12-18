import { colors, getRems, typography } from "brown-university-styles";
import styled from "styled-components";

const Label = styled.label`
  color: ${colors.darkGray};
  font-family: ${typography.sans};
  font-size: ${getRems(18)};
  font-weigth: normal;
`;

export default Label;
