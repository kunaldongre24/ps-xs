import React, { useState, useEffect } from "react";
import "../style/PccQuestionaire.css";
import Table from "./PerformTable";
import Loader from "./Loader";

function PccQuestionaire() {
  const [category, setCategory] = useState([]);
  const [cc, setCc] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(async () => {
    const response = await fetch("http://localhost:8000/api/v1/pcc/");
    const res = await response.json();
    const category = await fetch("http://localhost:8000/api/v1/pcc/category");
    const list = await category.json();
    setData(res);
    setCategory(list);
  }, []);
  async function sendData(event) {
    if (event) {
      const category = await fetch(
        `http://localhost:8000/api/v1/pcc/${event.target.value}`
      );
      setCc(event.target.value);
      const list = await category.json();
      setData(list);
    } else {
      const category = await fetch(`http://localhost:8000/api/v1/pcc/${cc}`);
      const list = await category.json();
      setData(list);
    }
  }
  async function removeData(event) {
    const removeData = await fetch(
      `http://localhost:8000/api/v1/pcc/${event.currentTarget.value}`,
      { method: "DELETE" }
    );
    sendData();
  }

  async function updateData(event) {
    const input = document.getElementsByClassName(event.currentTarget.value);
    const value = [];
    for (var i = 0; i <= 7; i++) {
      value[i] = input[i].value;
    }
    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: value[0],
        fatherName: value[1],
        email: value[2],
        address: value[3],
        phone: value[4],
        height: value[5],
        weight: value[6],
        nationality: value[7],
      }),
    };
    const updateData = await fetch(
      `http://localhost:8000/api/v1/pcc/${event.currentTarget.value}`,
      requestOptions
    );
    sendData();
  }
  async function addData() {
    const input = document.getElementsByClassName("new");
    const value = [];
    for (var i = 0; i <= 7; i++) {
      value[i] = input[i].value;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: value[0],
        fatherName: value[1],
        email: value[2],
        address: value[3],
        phone: value[4],
        height: value[5],
        weight: value[6],
        nationality: value[7],
      }),
    };
    const addData = await fetch(
      `http://localhost:8000/api/v1/pcc/`,
      requestOptions
    );
    sendData();
  }

  return (
    <div className="questionaire">
      <label htmlFor="category">Select Process Area:</label>

      <select name="category" onChange={sendData} id="category">
        {loading ? (
          <option value="">Loading</option>
        ) : (
          <option value="">Select</option>
        )}

        {category.map(function (object, i) {
          const val = category[i].nationality;
          return (
            <option key={i} value={val}>
              {val}
            </option>
          );
        })}
      </select>
      <div
        className="table"
        style={loading ? { border: "1px solid #ddd" } : {}}
      >
        {loading ? (
          <Loader />
        ) : (
          <Table
            data={data}
            delete={removeData}
            update={updateData}
            add={addData}
          />
        )}
      </div>
    </div>
  );
}

export default PccQuestionaire;
