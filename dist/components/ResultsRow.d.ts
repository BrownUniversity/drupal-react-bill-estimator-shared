import React from "react";
interface ResultsRowProps {
    type: "item" | "subtotal" | "total";
    label: string;
    value: string;
    testid: string | null;
}
declare const ResultsRow: React.FC<ResultsRowProps>;
export default ResultsRow;
