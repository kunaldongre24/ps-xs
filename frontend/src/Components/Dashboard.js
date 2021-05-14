import React from "react";
import "../style/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div style={{ marginBottom: "20px" }}>
        <label style={{ marginLeft: "8px" }}>Select Process Area: </label>
        <select name="category" id="category">
          <option value="">Select</option>
        </select>
        <label style={{ marginLeft: "52px" }}>Year: </label>
        <select name="year" id="year">
          <option value="">Select</option>
        </select>
      </div>
      <div>
        <label>Select Project Details: </label>
        <select name="category" id="category">
          <option value="">Select</option>
        </select>
        <label style={{ marginLeft: "30px" }}>Quarter: </label>
        <select name="category" id="category">
          <option value="">Select</option>
        </select>
      </div>
      <div style={{ marginTop: "30px" }} className="tcontain">
        <div className="tc" style={{ flex: "4" }}>
          <table className="tbl" style={{ marginRight: "7px", height: "100%" }}>
            <tr>
              <th>Project</th>
              <th>SW1</th>
              <th>SW2</th>
              <th>SW3</th>
              <th>SW4</th>
              <th>SW5</th>
              <th>SW6</th>
              <th>SW9</th>
              <th>Overall</th>
              <th>ASPICE Level</th>
            </tr>
            <tr>
              <td>Project 01</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Project 02</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Project 03</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Project 04</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Project 05</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <div className="tc" style={{ flex: "1" }}>
          <table className="tbl" style={{ marginLeft: "7px" }}>
            <tr>
              <th>Indicator</th>
              <th>Range</th>
            </tr>
            <tr>
              <td>N( Red )</td>
              <td>0 to 15%</td>
            </tr>
            <tr>
              <td>P( Yellow )</td>
              <td>15 to 50%</td>
            </tr>
            <tr>
              <td>L( Blue )</td>
              <td>50 to 85%</td>
            </tr>
            <tr>
              <td>F( Greendongrekunal16 )</td>
              <td>85 to 100%</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
