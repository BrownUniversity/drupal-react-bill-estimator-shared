import { breakpoints } from "brown-university-styles";
import styled from "styled-components";

const FormGroup = styled.div`
  margin-bottom: 15px;
  padding-bottom: 1.5rem;

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
    padding-bottom: 0.75rem;

    label,
    input,
    select {
      flex: 1;
      padding: 8px;
    }

    label {
      flex-basis: 50%;
    }
  }
`;

export default FormGroup;
