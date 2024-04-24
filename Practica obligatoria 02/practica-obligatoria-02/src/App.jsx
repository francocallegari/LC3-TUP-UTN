import React from "react";
import "./App.css";
import TableData from "./components/table/Table";

function App() {
  const netIncomes = [
    { brand: "McDonalds", income: 1291283 },
    { brand: "Burger King", income: 1927361 },
    { brand: "KFC", income: 1098463 },
  ];

  return (
    <>
      <TableData dataIncome={netIncomes} />
    </>
  );
}

export default App;
