import React from "react";
import "./style.css";
const Table = () => {
  return (
    <div style={{overflowX:"auto"}}> 
      <table className="table">
        <tr>
          <th>#</th>
          <th>Platform</th>
          <th>Last Traded Price</th>
          <th>Buy /Sell Price</th>
          <th>Different</th>
          <th>Saving</th>
        </tr>
        <tr className='row' align="center">
          <td>1</td>
          <td>Maria Anders</td>
          <td>₹ 36,70,488</td>
          <td>₹ 36,70,991 / ₹ 36,78,900</td>
          <td>6.56 %</td>
          <td>▲ ₹ 2,25,868</td>
        </tr>
        <tr className='row' align="center">
          <td>2</td>
          <td>Maria Anders</td>
          <td>₹ 36,61,580</td>
          <td>₹ 36,70,991 / ₹ 36,78,900</td>
          <td>6.30 %</td>
          <td>▲ ₹ 2,16,960</td>
        </tr>
        <tr className='row' align='center'>
          <td>3</td>
          <td>Maria Anders</td>
          <td>₹ 25,83,138</td>
          <td>₹ 25,75,167 / ₹ 26,08,984</td>
          <td>-25.01 %</td>
          <td>▼ ₹ 8,61,481</td>
        </tr>
        <tr className='row' align='center'>
          <td>4</td>
          <td>Maria Anders</td>
          <td>₹ 25,83,138</td>
          <td>₹ 25,75,167 / ₹ 26,08,984</td>
          <td>6.30 %</td>
          <td>▼ ₹ 8,61,481</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
