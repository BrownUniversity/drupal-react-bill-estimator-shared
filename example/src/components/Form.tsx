import { Formik } from "formik";
import * as React from "react";
import { Field, FormGroup, Label, Select, SelectWrapper } from "../../../dist";

const selectValueOptions = [
  { value: false, label: "No" },
  { value: true, label: "Yes" }
];

const Form = () => {
  return (
    <Formik
      initialValues={{
        selectValue: false,
        inputValue: ""
      }}
      onSubmit={values => alert(JSON.stringify(values))}
    >
      {({ values, setFieldValue, setFieldTouched }) => (
        <form>
          <FormGroup>
            <Label htmlFor="select-value-field">Select Value:</Label>
            <SelectWrapper>
              <Select
                inputId="select-value-field"
                name="selectValue"
                placeholder=""
                options={selectValueOptions}
                value={selectValueOptions.find(
                  option => option.value === values.selectValue
                )}
                onChange={option => setFieldValue("selectValue", option.value)}
                onBlur={() => setFieldTouched("selectValue")}
                isSearchable={false}
              />
            </SelectWrapper>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="input-value-field">Input:</Label>
            <Field id="input-value-field" name="inputValue" />
          </FormGroup>
        </form>
      )}
    </Formik>
  );
};

export default Form;
