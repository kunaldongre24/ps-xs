import React, { useState } from "react";
import { Link } from "react-router-dom";

function Table(props) {
  const [edit, setEdit] = useState("");
  const [error, setError] = useState("");
  const [add, setAdd] = useState(false);
  function handleEdit(event) {
    setEdit(event.currentTarget.value);
  }
  function handleSubmit() {
    const input = document.getElementsByClassName("new");
    const err = document.getElementsByClassName("error");
    var empty = false;
    for (var i = 0; i <= 7; i++) {
      if (!input[i].value) {
        input[i].style.background = "#ffd2cf";
        err[0].style.display = "block";
        setError("Input field cannot be empty...");
        empty = true;
      }
    }
    if (!empty) props.add();
  }
  const { data } = props;
  return (
    <div>
      <div className="error">{error}</div>

      <table>
        <thead>
          <tr>
            <th>Topic</th>
            <th>PCC Expected</th>
            <th>Reference to Project</th>
            <th>Expected Possible Eviction</th>
            <th>Rating </th>
            <th>RootCause</th>
            <th>Observation</th>
            <th>Evidence</th>
          </tr>
        </thead>
        <tbody>
          {data.map(function (object, i) {
            const {
              id,
              Topic,
              pccExpected,
              projectReference,
              expectedEviction,
              rating,
              rootcause,
              observation,
              evidence,
            } = data[i];
            const match = edit === id;
            var textStyle = { display: "block" };
            var inputStyle = { display: "none" };
            if (match) {
              textStyle = { display: "none" };
              inputStyle = { display: "block" };
            } else {
              textStyle = { display: "block" };
              inputStyle = { display: "none" };
            }
            return (
              <tr key={i} id={id}>
                <td>
                  <div className="textfield" style={textStyle}>
                    {Topic}
                  </div>
                  <input
                    type="text"
                    defaultValue={Topic}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {pccExpected}
                  </div>
                  <input
                    type="text"
                    defaultValue={pccExpected}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {projectReference}
                  </div>
                  <input
                    type="email"
                    defaultValue={projectReference}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {expectedEviction}
                  </div>
                  <input
                    type="text"
                    defaultValue={expectedEviction}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {rating}
                  </div>
                  <input
                    type="phone"
                    defaultValue={rating}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {rootcause}
                  </div>
                  <input
                    type="number"
                    defaultValue={rootcause}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {observation}
                  </div>
                  <input
                    type="number"
                    defaultValue={observation}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {evidence}
                  </div>
                  <input
                    type="text"
                    defaultValue={evidence}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
