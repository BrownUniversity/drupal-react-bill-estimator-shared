import { breakpoints } from "brown-university-styles";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    display: inline-block;
    margin-bottom: 5px;
  }

  input,
  select {
    width: 100%;
  }

  @media (min-width: ${breakpoints.md}px) {
    display: flex;

    label,
    input,
    select {
      flex: 1;
      padding: 8px;
    }
  }
`;

export default FormGroup;
