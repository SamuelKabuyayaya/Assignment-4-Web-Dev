import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, adminOnly = false }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/signin" />;

  if (adminOnly) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1])); 
      if (payload.role !== "admin") return <Navigate to="/" />;
    } catch (err) {
      return <Navigate to="/signin" />;
    }
  }

  return children;
}
