import { breakpoints, colors, typography, getRems } from 'brown-university-styles';
import styled from 'styled-components';
import { Button as Button$1 } from 'brown-university-components';
import { Field as Field$1 } from 'formik';
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

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0 10px;\n  margin: 40px 0;\n\n  @media (min-width: ", "px) {\n    padding: 0;\n    margin: 60px 0;\n  }\n\n  @media (min-width: ", "px) {\n    padding: 0 11.25%;\n    margin: 80px 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var AppWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject(), breakpoints.md, breakpoints.lg);

function _templateObject$1() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 13px;\n  letter-spacing: 1.5px;\n  padding: 15px 20px 16px;\n  margin: 40px auto 60px;\n  transition: background 0.25s, color 0.25s;\n\n  @media (min-width: ", "px) {\n    padding: 22px 30px 23px;\n  }\n\n  @media (min-width: ", "px) {\n    padding: 80px auto;\n  }\n\n  &:hover,\n  &:focus {\n    background: ", ";\n  }\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Button =
/*#__PURE__*/
styled(Button$1)(
/*#__PURE__*/
_templateObject$1(), breakpoints.md, breakpoints.xl, colors.black);

var outlineGray = "#707070";
var lightRed = "#f2cccc";

function _templateObject$2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  border: 1px solid ", ";\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  height: 42px;\n  padding: 2px 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Field =
/*#__PURE__*/
styled(Field$1)(
/*#__PURE__*/
_templateObject$2(), colors.taupe, outlineGray, typography.sans,
/*#__PURE__*/
getRems(18));

function _templateObject$3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var Form =
/*#__PURE__*/
styled.form(
/*#__PURE__*/
_templateObject$3());

function _templateObject$4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 15px;\n  padding-bottom: 1.5rem;\n\n  label {\n    display: inline-block;\n    margin-bottom: 5px;\n  }\n\n  input,\n  select {\n    width: 100%;\n  }\n\n  @media (min-width: ", "px) {\n    display: flex;\n    padding-bottom: 0.75rem;\n\n    label,\n    input,\n    select {\n      flex: 1;\n      padding: 8px;\n    }\n\n    label {\n      flex-basis: 50%;\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var FormGroup =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$4(), breakpoints.md);

function _templateObject$5() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-family: ", ";\n  font-size: ", ";\n  font-weigth: normal;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var Label =
/*#__PURE__*/
styled.label(
/*#__PURE__*/
_templateObject$5(), colors.darkGray, typography.sans,
/*#__PURE__*/
getRems(18));

function _templateObject$6() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var ResultsGroup =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$6());

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  width: 100%;\n\n  @media (min-width: ", "px) {\n    max-width: 125px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  flex: 1;\n  flex-basis: 30%;\n  padding: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  flex: 1;\n  flex-basis: 70%;\n  font-size: ", ";\n  font-weight: ", ";\n  padding: 8px;\n\n  @media (min-width: ", "px) {\n    padding-right: 0px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$7() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: ", ";\n  border-top: 1px solid ", ";\n  display: flex;\n  font-family: ", ";\n  padding: 20px 0;\n"]);

  _templateObject$7 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper =
/*#__PURE__*/
styled(function (_ref) {
  var type = _ref.type,
      restProps = _objectWithoutPropertiesLoose(_ref, ["type"]);

  return React.createElement("div", Object.assign({}, restProps));
})(
/*#__PURE__*/
_templateObject$7(), function (_ref2) {
  var type = _ref2.type;
  return type === "subtotal" ? "#f8f7f5" : colors.white;
}, colors.taupe, typography.sans);
var Label$1 =
/*#__PURE__*/
styled(function (_ref3) {
  var type = _ref3.type,
      restProps = _objectWithoutPropertiesLoose(_ref3, ["type"]);

  return React.createElement("div", Object.assign({}, restProps));
})(
/*#__PURE__*/
_templateObject2(), function (_ref4) {
  var type = _ref4.type;
  return type === "item" ? colors.darkGray : colors.black;
}, function (_ref5) {
  var type = _ref5.type;
  return type === "total" ? getRems(21) : getRems(19);
}, function (_ref6) {
  var type = _ref6.type;
  return type === "total" && 700;
}, breakpoints.md);
var Value =
/*#__PURE__*/
styled(function (_ref7) {
  var type = _ref7.type,
      restProps = _objectWithoutPropertiesLoose(_ref7, ["type"]);

  return React.createElement("div", Object.assign({}, restProps));
})(
/*#__PURE__*/
_templateObject3(), function (_ref8) {
  var type = _ref8.type;
  return type === "subtotal" ? "#4a4a4a" : colors.black;
}, function (_ref9) {
  var type = _ref9.type;
  return type === "total" ? getRems(21) : getRems(19);
}, function (_ref10) {
  var type = _ref10.type;
  return type === "total" && 700;
});
var ValueInner =
/*#__PURE__*/
styled.span(
/*#__PURE__*/
_templateObject4(), breakpoints.md);

var ResultsRow = function ResultsRow(_ref11) {
  var _ref11$type = _ref11.type,
      type = _ref11$type === void 0 ? "item" : _ref11$type,
      label = _ref11.label,
      value = _ref11.value,
      _ref11$testid = _ref11.testid,
      testid = _ref11$testid === void 0 ? null : _ref11$testid;
  return React.createElement(Wrapper, {
    type: type
  }, React.createElement(Label$1, {
    type: type
  }, label), React.createElement(Value, {
    type: type,
    "data-testid": testid ? testid + "-value" : null
  }, React.createElement(ValueInner, null, value)));
};

function _templateObject$8() {
  var data = _taggedTemplateLiteralLoose(["\n  .react-select__control {\n    border-radius: 0;\n    color: ", "\n    font-family: ", ";\n    font-size: ", ";\n    min-height: 42px;\n    outline: 1px solid ", ";\n\n    svg {\n       fill: ", ";\n    }\n  }\n  .react-select__control--is-focused,\n  .react-select__control--is-focused:hover {\n    border-color: transparent;\n    box-shadow: 0 0 0 0.2rem rgba(153, 153, 158, 0.6);\n    outline: 0;\n  }\n  .react-select__indicators {\n    background-color: ", ";\n  }\n  .react-select__single-value {\n    color: ", ";\n  }\n  .react-select__option {\n    color: ", ";\n    font-family: ", ";\n    font-size: ", ";\n  }\n  .react-select__option:active,\n  .react-select__option:hover {\n    background-color: ", ";\n  }\n  .react-select__option--is-focused {\n    background-color: ", ";\n  }\n  .react-select__option--is-selected,\n  .react-select__option--is-selected:active,\n  .react-select__option--is-selected:hover {\n    background-color: ", ";\n    color: white;\n  }\n  .react-select__indicator-separator {\n    display: none;\n  }\n"]);

  _templateObject$8 = function _templateObject() {
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
_templateObject$8(), outlineGray, typography.sans,
/*#__PURE__*/
getRems(18), colors.taupe, colors.white, colors.red, colors.mediumGray, colors.darkGray, typography.sans,
/*#__PURE__*/
getRems(18), lightRed, lightRed, colors.red);

function _templateObject$9() {
  var data = _taggedTemplateLiteralLoose(["\n  @media (min-width: ", "px) {\n    flex: 1;\n    margin-left: -15px;\n  }\n"]);

  _templateObject$9 = function _templateObject() {
    return data;
  };

  return data;
}
var SelectWrapper =
/*#__PURE__*/
styled.div(
/*#__PURE__*/
_templateObject$9(), breakpoints.md);

var BASE_URLS = {
  qa: "***REMOVED***",
  prod: "***REMOVED***"
};

var currencyFormatter =
/*#__PURE__*/
new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2
});

function mungeFormData(formData) {
  var result = {};
  Object.entries(formData).map(function (_ref) {
    var key = _ref[0],
        value = _ref[1];
    var numericKeys = ["brownScholarship", "federalGrants", "programTuitionFeeSupport", "loans"];

    if (numericKeys.includes(key) && Number.isNaN(parseInt(value, 10))) {
      result[key] = 0;
    } else {
      result[key] = value;
    }

    return undefined;
  });
  return result;
}

export { AppWrapper, BASE_URLS, Button, Field, Form, FormGroup, Label, ResultsGroup, ResultsRow, Select, SelectWrapper, currencyFormatter, mungeFormData };
//# sourceMappingURL=drupal-react-bill-estimator-shared.esm.js.map
