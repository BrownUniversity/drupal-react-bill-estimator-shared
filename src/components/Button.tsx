import styled from "styled-components";
import { Button as BrownButton } from "brown-university-components";
import { breakpoints, colors } from "brown-university-styles";

const Button = styled(BrownButton)`
  font-size: 13px;
  letter-spacing: 1.5px;
  padding: 15px 20px 16px;
  margin: 40px auto 60px;
  transition: background 0.25s, color 0.25s;

  @media (min-width: ${breakpoints.md}px) {
    padding: 22px 30px 23px;
  }

  @media (min-width: ${breakpoints.xl}px) {
    padding: 80px auto;
  }

  &:hover,
  &:focus {
    background: ${colors.black};
  }
`;

export default Button;
