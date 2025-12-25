// src/AdminDashboard.jsx
import { useState } from "react";

export default function AdminDashboard() {
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState("");

  const addClass = () => {
    if (!className) return;
    setClasses([...classes, className]);
    setClassName("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>
      <input 
        placeholder="Enter Class Name"
        value={className}
        onChange={e => setClassName(e.target.value)}
      />
      <button onClick={addClass} style={{ marginLeft: 10 }}>Add Class</button>

      <ul>
        {classes.map((cls, idx) => <li key={idx}>{cls}</li>)}
      </ul>
    </div>
  );
}
