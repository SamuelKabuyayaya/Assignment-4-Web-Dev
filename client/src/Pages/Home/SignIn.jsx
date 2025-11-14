import React, { useState } from "react";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${API}/api/auth/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      alert("Signed in!");
    } else {
      alert(data.error || "Login failed");
    }
  };

  return (
    <div className="auth-page">
     <div className="auth-card">

      <h2>Sign In</h2>

      <form className="auth--form" onSubmit={handleSubmit}>
        <label>
          Email
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </label>

        <label >
          Password
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </label>

        <button className="btn btn-primary">Sign In</button>
      </form>
      </div>
    </div>  
  );
}
