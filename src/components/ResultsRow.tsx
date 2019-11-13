import {
  breakpoints,
  colors,
  getRems,
  typography
} from "brown-university-styles";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const Label = styled(({ type, ...restProps }) => <div {...restProps} />)`
  color: ${({ type }) => (type === "item" ? colors.darkGray : colors.black)};
  flex: 1;
  font-family: ${typography.sansBold};
  font-size: ${({ type }) => (type === "total" ? getRems(21) : getRems(19))};
  padding: 8px;
`;

const Value = styled(({ type, ...restProps }) => <div {...restProps} />)`
  color: ${({ type }) => (type === "total" ? colors.black : colors.mediumGray)};
  font-family: ${({ type }) =>
    type === "item" ? typography.sans : typography.sansBold};
  font-size: ${({ type }) => (type === "total" ? getRems(21) : getRems(19))};
  flex: 1;
  padding: 8px;
`;

const ValueInner = styled.span`
  display: inline-block;
  text-align: right;
  width: 100%;

  @media (min-width: ${breakpoints.md}px) {
    max-width: 125px;
  }
`;

interface ResultsRowProps {
  type: "item" | "subtotal" | "total";
  label: string;
  value: string;
  testid: string | null;
}

const ResultsRow: React.FC<ResultsRowProps> = ({
  type = "item",
  label,
  value,
  testid = null
}) => (
  <Wrapper>
    <Label type={type}>{label}:</Label>
    <Value type={type} data-testid={testid ? `${testid}-value` : null}>
      <ValueInner>{value}</ValueInner>
    </Value>
  </Wrapper>
);

export default ResultsRow;
