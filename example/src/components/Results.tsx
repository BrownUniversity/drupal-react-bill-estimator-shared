import * as React from "react";
import { ResultsGroup, ResultsRow } from "../../../dist";

const Results = () => {
  return (
    <>
      <ResultsGroup>
        <ResultsRow label="Item 1" value="$1,000" />
        <ResultsRow label="Item 2" value="$2,000" />
        <ResultsRow type="subtotal" label="Sub-total" value="$3,000" />
      </ResultsGroup>
      <ResultsGroup>
        <ResultsRow type="total" label="Total" value="$3,000" />
      </ResultsGroup>
    </>
  );
};

export default Results;
