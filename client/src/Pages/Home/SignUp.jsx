import React, { useState } from "react";

const API = process.env.REACT_APP_API_URL
 || "http://localhost:8000";


export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/api/auth/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();

    res.ok ? alert("User created!") : alert(data.error);
  };

  return (
    <div className="auth-page">
     <div className="auth-card">
      <h2>Register</h2>

      <form className="auth--form" onSubmit={handleSubmit}>
        <label className="auth--label">
          Name
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </label>

        <label>
          Email
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>

        <label>
          Password
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>

        <button className="btn btn-primary">Register</button>
      </form>
      </div>
    </div>  
  );
}
