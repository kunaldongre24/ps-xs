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
    <div style={{ display: "flex", width: "100%" }}>
      <div style={{ flex: "3" }}>
        <div className="error">{error}</div>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Project OPL</th>
              <th>Responsible</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>RTC Task</th>
              <th>Actual Date</th>
              <th>Last Remainder</th>
            </tr>
          </thead>
          <tbody>
            {data.map(function (object, i) {
              const {
                id,
                type,
                projectDpl,
                responsible,
                dueDate,
                Status,
                rtcTask,
                actualDate,
                lastRemainder,
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
                      {type}
                    </div>
                    <input
                      type="text"
                      defaultValue={type}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {projectDpl}
                    </div>
                    <input
                      type="text"
                      defaultValue={projectDpl}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {responsible}
                    </div>
                    <input
                      type="email"
                      defaultValue={responsible}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {dueDate}
                    </div>
                    <input
                      type="text"
                      defaultValue={dueDate}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {Status}
                    </div>
                    <input
                      type="phone"
                      defaultValue={Status}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {rtcTask}
                    </div>
                    <input
                      type="number"
                      defaultValue={rtcTask}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {actualDate}
                    </div>
                    <input
                      type="number"
                      defaultValue={actualDate}
                      className={`edit-field ${id}`}
                      style={inputStyle}
                    />
                  </td>
                  <td>
                    <div className="textfield" style={textStyle}>
                      {lastRemainder}
                    </div>
                    <input
                      type="text"
                      defaultValue={lastRemainder}
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
      <div style={{ marginLeft: "10px", flex: "1" }}>
        <div className="topicHeader">Open Topics Status Chart</div>
      </div>
    </div>
  );
}

export default Table;
