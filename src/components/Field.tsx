import { colors, getRems, typography } from "brown-university-styles";
import { Field as FormikField } from "formik";
import styled from "styled-components";
import { outlineGray } from "../styles";

const Field = styled(FormikField)`
  box-sizing: border-box;
  border: 1px solid ${colors.taupe};
  color: ${outlineGray};
  font-family: ${typography.sans};
  font-size: ${getRems(18)};
  height: 42px;
  padding: 2px 10px;
`;

export default Field;
