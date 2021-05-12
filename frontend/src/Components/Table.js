import React, { useState } from "react";

function Table(props) {
  const [edit, setEdit] = useState("");
  const [error, setError] = useState("sds");
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
      <button
        type="button"
        className="addNew"
        onClick={() => {
          setAdd(!add);
        }}
      >
        {add ? (
          <>
            <div className="text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#fff"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
              </svg>
              Cancel
            </div>
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#FFFFFF"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M13 11h-2v3H8v2h3v3h2v-3h3v-2h-3zm1-9H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
            </svg>
            <div className="text">New</div>
          </>
        )}
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Height</th>
            <th>Weight</th>
            <th>Nationality</th>
            <th colSpan="2">Edit</th>
          </tr>
        </thead>
        <tbody>
          {add ? (
            <tr id="new">
              <td>
                <input type="text" required className="new edit-field" />
              </td>
              <td>
                <input type="text" required className="new edit-field" />
              </td>
              <td>
                <input type="email" required className="new edit-field" />
              </td>
              <td>
                <input type="text" required className="new edit-field" />
              </td>
              <td>
                <input type="phone" required className="new edit-field" />
              </td>
              <td>
                <input type="number" required className="new edit-field" />
              </td>
              <td>
                <input type="number" required className="new edit-field" />
              </td>
              <td>
                <input type="text" required className="new edit-field" />
              </td>
              <td>
                <button className="edit Btn" value="new" onClick={handleSubmit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                  </svg>
                </button>
              </td>
              <td>
                <button
                  type="button"
                  value="new"
                  className="delete Btn"
                  onClick={() => {
                    setAdd(false);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#fff"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                  </svg>
                </button>
              </td>
            </tr>
          ) : (
            ""
          )}
          {data.map(function (object, i) {
            const {
              id,
              name,
              fatherName,
              email,
              address,
              phone,
              height,
              weight,
              nationality,
            } = data[i];
            const match = edit == id;
            var textStyle = { display: "block" };
            var inputStyle = { display: "none" };
            if (match) {
              var textStyle = { display: "none" };
              var inputStyle = { display: "block" };
            } else {
              var textStyle = { display: "block" };
              var inputStyle = { display: "none" };
            }
            return (
              <tr key={i} id={id}>
                <td>
                  <div className="textfield" style={textStyle}>
                    {name}
                  </div>
                  <input
                    type="text"
                    defaultValue={name}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {fatherName}
                  </div>
                  <input
                    type="text"
                    defaultValue={fatherName}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {email}
                  </div>
                  <input
                    type="email"
                    defaultValue={email}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {address}
                  </div>
                  <input
                    type="text"
                    defaultValue={address}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {phone}
                  </div>
                  <input
                    type="phone"
                    defaultValue={phone}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {height}
                  </div>
                  <input
                    type="number"
                    defaultValue={height}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {weight}
                  </div>
                  <input
                    type="number"
                    defaultValue={weight}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <div className="textfield" style={textStyle}>
                    {nationality}
                  </div>
                  <input
                    type="text"
                    defaultValue={nationality}
                    className={`edit-field ${id}`}
                    style={inputStyle}
                  />
                </td>
                <td>
                  <button
                    className="edit Btn"
                    value={id}
                    onClick={handleEdit}
                    style={textStyle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
                    </svg>
                  </button>
                  <button
                    className="edit Btn"
                    value={id}
                    onClick={props.update}
                    style={inputStyle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="delete Btn"
                    value={id}
                    onClick={props.delete}
                    style={textStyle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="delete Btn"
                    value={id}
                    onClick={() => {
                      setEdit("");
                    }}
                    style={inputStyle}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#fff"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                    </svg>
                  </button>
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
