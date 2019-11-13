import { colors, getRems, typography } from "brown-university-styles";
import styled from "styled-components";

const Label = styled.label`
  color: ${colors.darkGray};
  font-family: ${typography.sansBold};
  font-size: ${getRems(19)};
`;

export default Label;
