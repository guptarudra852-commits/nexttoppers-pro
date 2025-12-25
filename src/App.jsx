import { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AdminDashboard from "./AdminDashboard";

function Login({ role, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert(`${role} signed up!`);
    } catch (err) {
      alert(err.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin(role);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 20, border: "1px solid #ddd", margin: 10 }}>
      <h2>{role}</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br /><br />
      <button onClick={signup}>Signup</button>
      <button onClick={login} style={{ marginLeft: 10 }}>Login</button>
    </div>
  );
}

export default function App() {
  const [role, setRole] = useState(null);

  if (!role) {
    return (
      <div>
        <Login role="Admin" onLogin={setRole} />
        <Login role="Teacher" onLogin={setRole} />
        <Login role="Student" onLogin={setRole} />
      </div>
    );
  }

  if (role === "Admin") return <AdminDashboard />;

  return <h1>Welcome, {role}</h1>;
}
