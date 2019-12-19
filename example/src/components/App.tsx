import * as React from "react";
import { AppHeading, AppWrapper } from "../../../dist";
import Form from "./Form";
import Results from "./Results";

const App = () => {
  return (
    <AppWrapper>
      <AppHeading>Bill Estimator</AppHeading>
      <Form />
      <Results />
    </AppWrapper>
  );
};

export default App;
