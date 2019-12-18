import * as React from "react";
import { AppWrapper } from "../../../dist";
import Form from "./Form";
import Results from "./Results";

const App = () => {
  return (
    <AppWrapper>
      <h2>Bill Estimator</h2>
      <Form />
      <Results />
    </AppWrapper>
  );
};

export default App;
