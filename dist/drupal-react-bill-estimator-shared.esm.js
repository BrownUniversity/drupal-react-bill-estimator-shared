import { colors, typography, getRems, breakpoints } from 'brown-university-styles';
import { Field as Field$1 } from 'formik';
import styled from 'styled-components';
import ReactSelect from 'react-select';

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  strings.raw = raw;
  return strings;
}

var outlineGray = "#d2d2d2";
var lightRed = "#f2cccc";

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  border: 1px solid ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  height: 42px;\n  padding: 2px 10px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Field =
/*#__PURE__*/
styled(Field$1)(
/*#__PURE__*/
_templateObject(), outlineGray, colors.mediumGray, typography.sans,
/*#__PURE__*/
getRems(18));

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 15px;\n\n  label {\n    display: inline-block;\n    margin-bottom: 5px;\n  }\n\n  input,\n  select {\n    width: 100%;\n  }\n\n  @media (min-width: ", "px) {\n    display: flex;\n\n    label,\n    input,\n    select {\n      flex: 1;\n      padding: 8px;\n    }\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var FormGroup =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$1(), breakpoints.md);

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Label =
/*#__PURE__*/
styled.label(
/*#__PURE__*/
_templateObject$2(), colors.darkGray, typography.sansBold,
/*#__PURE__*/
getRems(19));

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  .react-select__control {\n    border-radius: 0;\n    font-family: ", ";\n    font-size: ", ";\n    min-height: 42px;\n    outline: 1px solid ", ";\n  }\n  .react-select__control--is-focused,\n  .react-select__control--is-focused:hover {\n    border-color: transparent;\n    box-shadow: 0 0 0 0.2rem rgba(153, 153, 158, 0.6);\n    outline: 0;\n  }\n  .react-select__single-value {\n    color: ", ";\n  }\n  .react-select__option {\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n  .react-select__option:active,\n  .react-select__option:hover {\n    background-color: ", ";\n  }\n  .react-select__option--is-focused {\n    background-color: ", ";\n  }\n  .react-select__option--is-selected,\n  .react-select__option--is-selected:active,\n  .react-select__option--is-selected:hover {\n    background-color: ", ";\n    color: white;\n  }\n  .react-select__indicator-separator {\n    display: none;\n  }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Select =
/*#__PURE__*/
styled(ReactSelect).attrs({
  classNamePrefix: "react-select"
})(
/*#__PURE__*/
_templateObject$3(), typography.sans,
/*#__PURE__*/
getRems(18), outlineGray, colors.mediumGray, colors.darkGray, typography.sans,
/*#__PURE__*/
getRems(18), lightRed, lightRed, colors.red);

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  @media (min-width: ", "px) {\n    flex: 1;\n    margin-left: -15px;\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var SelectWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$4(), breakpoints.md);

export { Field, FormGroup, Label, Select, SelectWrapper };
//# sourceMappingURL=drupal-react-bill-estimator-shared.esm.js.map
