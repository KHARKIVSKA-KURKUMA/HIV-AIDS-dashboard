import React from "react";
import { StyledTable, TableWrapper } from "./ChartsPageStyled";

const TableChartComponent = ({ regionData }) => {
  return (
    <TableWrapper>
      <StyledTable>
        <thead>
          <tr>
            <th>Область</th>
            <th>ВІЛ</th>
            <th>СНІД</th>
            <th>Смертність</th>
          </tr>
        </thead>

        <tbody>
          {regionData.map((item) => (
            <tr key={item.region}>
              <td>{item.region}</td>
              <td>{item.hivCases}</td>
              <td>{item.aidsCases}</td>
              <td>{item.mortality}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  );
};

export default TableChartComponent;
