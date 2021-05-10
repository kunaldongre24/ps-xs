import React, { useState, useEffect } from "react";
import "../style/PccQuestionaire.css";
import Table from "./Table";
import Loader from "./Loader";

function PccQuestionaire() {
  const [category, setCategory] = useState([]);
  const [cc, setCc] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    const response = await fetch("http://localhost:8000/api/v1/pcc/");
    const res = await response.json();
    const category = await fetch("http://localhost:8000/api/v1/pcc/category");
    const list = await category.json();
    setData(res);
    setCategory(list);
    setLoading(false);
  }, []);
  async function sendData(event) {
    setLoading(true);
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
    setLoading(false);
  }
  async function removeData(event) {
    setLoading(true);
    const removeData = await fetch(
      `http://localhost:8000/api/v1/pcc/${event.currentTarget.value}`,
      { method: "DELETE" }
    );
    sendData();
    setLoading(false);
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
          const val = category[i];
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
        {loading ? <Loader /> : <Table data={data} delete={removeData} />}
      </div>
    </div>
  );
}

export default PccQuestionaire;