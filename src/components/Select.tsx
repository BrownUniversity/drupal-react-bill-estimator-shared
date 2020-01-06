import { colors, getRems, typography } from "brown-university-styles";
import ReactSelect from "react-select";
import styled from "styled-components";
import { lightRed, outlineGray } from "../styles";

const Select = styled(ReactSelect).attrs({
  classNamePrefix: "react-select"
})`
  .react-select__control {
    border-color: rgb(183, 176, 156);
    border-radius: 0;
    color: ${outlineGray}
    font-family: ${typography.sans};
    font-size: ${getRems(18)};
    min-height: 42px;
    outline: 1px solid ${colors.taupe};

    svg {
       fill: ${colors.white};
    }
  }
  .react-select__control--is-focused,
  .react-select__control--is-focused:hover {
    border-color: transparent;
    box-shadow: 0 0 0 0.2rem rgba(153, 153, 158, 0.6);
    outline: 0;
  }
  .react-select__indicators {
    background-color: ${colors.red};
  }
  .react-select__single-value {
    color: ${colors.mediumGray};
  }
  .react-select__option {
    color: ${colors.darkGray};
    font-family: ${typography.sans};
    font-size: ${getRems(18)};
  }
  .react-select__option:active,
  .react-select__option:hover {
    background-color: ${lightRed};
  }
  .react-select__option--is-focused {
    background-color: ${lightRed};
  }
  .react-select__option--is-selected,
  .react-select__option--is-selected:active,
  .react-select__option--is-selected:hover {
    background-color: ${colors.red};
    color: white;
  }
  .react-select__indicator-separator {
    display: none;
  }
`;

export default Select;
