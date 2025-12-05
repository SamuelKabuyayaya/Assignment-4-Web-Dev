import React from "react";
import { useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminCreateProject() {
  const navigate = useNavigate();

  const handleCreate = async (projectData) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/api/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });

    const data = await res.json();
    if (!res.ok) return alert(data.error || "Failed to create project");

    navigate("/admin/projects");
  };

  return (
      <section className="admin-form-section">
            <ProjectForm onSubmit={handleCreate} />
          </section>
  );
}
