import React from "react";
import Table from "react-bootstrap/Table";

const TableData = ({ dataIncome }) => {
  const totalIncome = dataIncome.reduce(
    (total, particular) => total + particular.income,
    0
  );
  const averageIncome = (totalIncome / dataIncome.length).toFixed(2);

  return (
    <div>
      <Table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th scope="col">Marca</th>
            <th scope="col">Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {dataIncome.map((item, i) => (
            <tr key={i}>
              <td>{item.brand}</td>
              <td>${item.income}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <p
        style={{
          backgroundColor: "#343a40",
          color: "white",
          padding: "15px",
          marginTop: "10px",
        }}
      >
        Promedio neto: ${averageIncome}
      </p>
    </div>
  );
};

export default TableData;
