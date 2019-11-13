import { colors, typography, getRems, breakpoints } from 'brown-university-styles';
import { Field as Field$1 } from 'formik';
import styled from 'styled-components';
import React from 'react';
import ReactSelect from 'react-select';

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

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
  var data = _taggedTemplateLiteralLoose(["\n  border-top: 2px solid ", ";\n  margin-top: 15px;\n  padding-top: 10px;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var ResultsGroup =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$3(), colors.lightGray);

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  text-align: right;\n  width: 100%;\n\n  @media (min-width: ", "px) {\n    max-width: 125px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  flex: 1;\n  padding: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  flex: 1;\n  font-family: ", ";\n  font-size: ", ";\n  padding: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-bottom: 15px;\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$4());
var Label$1 =
/*#__PURE__*/
styled(function (_ref) {
  var type = _ref.type,
      restProps = _objectWithoutPropertiesLoose(_ref, ["type"]);

  return React.createElement("div", Object.assign({}, restProps));
})(
/*#__PURE__*/
_templateObject2(), function (_ref2) {
  var type = _ref2.type;
  return type === "item" ? colors.darkGray : colors.black;
}, typography.sansBold, function (_ref3) {
  var type = _ref3.type;
  return type === "total" ? getRems(21) : getRems(19);
});
var Value =
/*#__PURE__*/
styled(function (_ref4) {
  var type = _ref4.type,
      restProps = _objectWithoutPropertiesLoose(_ref4, ["type"]);

  return React.createElement("div", Object.assign({}, restProps));
})(
/*#__PURE__*/
_templateObject3(), function (_ref5) {
  var type = _ref5.type;
  return type === "total" ? colors.black : colors.mediumGray;
}, function (_ref6) {
  var type = _ref6.type;
  return type === "item" ? typography.sans : typography.sansBold;
}, function (_ref7) {
  var type = _ref7.type;
  return type === "total" ? getRems(21) : getRems(19);
});
var ValueInner =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject4(), breakpoints.md);

var ResultsRow = function ResultsRow(_ref8) {
  var _ref8$type = _ref8.type,
      type = _ref8$type === void 0 ? "item" : _ref8$type,
      label = _ref8.label,
      value = _ref8.value,
      _ref8$testid = _ref8.testid,
      testid = _ref8$testid === void 0 ? null : _ref8$testid;
  return React.createElement(Wrapper, null, React.createElement(Label$1, {
    type: type
  }, label, ":"), React.createElement(Value, {
    type: type,
    "data-testid": testid ? testid + "-value" : null
  }, React.createElement(ValueInner, null, value)));
};

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  .react-select__control {\n    border-radius: 0;\n    font-family: ", ";\n    font-size: ", ";\n    min-height: 42px;\n    outline: 1px solid ", ";\n  }\n  .react-select__control--is-focused,\n  .react-select__control--is-focused:hover {\n    border-color: transparent;\n    box-shadow: 0 0 0 0.2rem rgba(153, 153, 158, 0.6);\n    outline: 0;\n  }\n  .react-select__single-value {\n    color: ", ";\n  }\n  .react-select__option {\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n  .react-select__option:active,\n  .react-select__option:hover {\n    background-color: ", ";\n  }\n  .react-select__option--is-focused {\n    background-color: ", ";\n  }\n  .react-select__option--is-selected,\n  .react-select__option--is-selected:active,\n  .react-select__option--is-selected:hover {\n    background-color: ", ";\n    color: white;\n  }\n  .react-select__indicator-separator {\n    display: none;\n  }\n"]);

  _templateObject$5 = function _templateObject() {
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
_templateObject$5(), typography.sans,
/*#__PURE__*/
getRems(18), outlineGray, colors.mediumGray, colors.darkGray, typography.sans,
/*#__PURE__*/
getRems(18), lightRed, lightRed, colors.red);

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose(["\n  @media (min-width: ", "px) {\n    flex: 1;\n    margin-left: -15px;\n  }\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var SelectWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$6(), breakpoints.md);

export { Field, FormGroup, Label, ResultsGroup, ResultsRow, Select, SelectWrapper };
//# sourceMappingURL=drupal-react-bill-estimator-shared.esm.js.map
