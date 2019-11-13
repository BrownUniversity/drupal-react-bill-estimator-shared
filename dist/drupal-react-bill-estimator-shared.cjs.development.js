'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var brownUniversityStyles = require('brown-university-styles');
var formik = require('formik');
var styled = _interopDefault(require('styled-components'));
var ReactSelect = _interopDefault(require('react-select'));

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
styled(formik.Field)(
/*#__PURE__*/
_templateObject(), outlineGray, brownUniversityStyles.colors.mediumGray, brownUniversityStyles.typography.sans,
/*#__PURE__*/
brownUniversityStyles.getRems(18));

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
_templateObject$1(), brownUniversityStyles.breakpoints.md);

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
_templateObject$2(), brownUniversityStyles.colors.darkGray, brownUniversityStyles.typography.sansBold,
/*#__PURE__*/
brownUniversityStyles.getRems(19));

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
_templateObject$3(), brownUniversityStyles.typography.sans,
/*#__PURE__*/
brownUniversityStyles.getRems(18), outlineGray, brownUniversityStyles.colors.mediumGray, brownUniversityStyles.colors.darkGray, brownUniversityStyles.typography.sans,
/*#__PURE__*/
brownUniversityStyles.getRems(18), lightRed, lightRed, brownUniversityStyles.colors.red);

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
_templateObject$4(), brownUniversityStyles.breakpoints.md);

exports.Field = Field;
exports.FormGroup = FormGroup;
exports.Label = Label;
exports.Select = Select;
exports.SelectWrapper = SelectWrapper;
//# sourceMappingURL=drupal-react-bill-estimator-shared.cjs.development.js.map
