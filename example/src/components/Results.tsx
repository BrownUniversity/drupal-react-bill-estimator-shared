import * as React from "react";
import { currencyFormatter, ResultsGroup, ResultsRow } from "../../../dist";

const Results = () => {
  return (
    <>
      <ResultsGroup>
        <ResultsRow label="Item 1" value={currencyFormatter.format(1000)} />
        <ResultsRow label="Item 2" value={currencyFormatter.format(2000)} />
        <ResultsRow
          type="subtotal"
          label="Sub-total"
          value={currencyFormatter.format(3000)}
        />
      </ResultsGroup>
      <ResultsGroup>
        <ResultsRow
          type="total"
          label="Total"
          value={currencyFormatter.format(3000)}
        />
      </ResultsGroup>
    </>
  );
};

export default Results;
