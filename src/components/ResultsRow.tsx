import { breakpoints, colors, getRems } from "brown-university-styles";
import React from "react";
import styled from "styled-components";

const Wrapper = styled(({ type, ...restProps }) => <div {...restProps} />)`
  background-color: ${({ type }) =>
    type === "subtotal" ? "#f8f7f5" : colors.white};
  border-top: 1px solid ${colors.taupe};
  display: flex;
  padding: 20px 0;
`;

const Label = styled(({ type, ...restProps }) => <div {...restProps} />)`
  color: ${({ type }) => (type === "item" ? colors.darkGray : colors.black)};
  flex: 1;
  flex-basis: 70%;
  font-size: ${({ type }) => (type === "total" ? getRems(21) : getRems(19))};
  font-weight: ${({ type }) => type === "total" && 700};
  padding: 8px;

  @media (min-width: ${breakpoints.md}px) {
    padding-right: 0px;
  }
`;

const Value = styled(({ type, ...restProps }) => <div {...restProps} />)`
  color: ${({ type }) => (type === "subtotal" ? "#4a4a4a" : colors.black)};
  font-size: ${({ type }) => (type === "total" ? getRems(21) : getRems(19))};
  font-weight: ${({ type }) => type === "total" && 700};
  flex: 1;
  flex-basis: 30%;
  padding: 8px;
`;

const ValueInner = styled.span`
  display: inline-block;
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
  <Wrapper type={type}>
    <Label type={type}>{label}:</Label>
    <Value type={type} data-testid={testid ? `${testid}-value` : null}>
      <ValueInner>{value}</ValueInner>
    </Value>
  </Wrapper>
);

export default ResultsRow;
