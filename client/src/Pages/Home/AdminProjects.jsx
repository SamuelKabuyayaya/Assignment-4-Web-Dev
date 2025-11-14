import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:8000";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const token = localStorage.getItem("token");
    const res = await fetch(`${API}/api/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await res.json();
    setProjects(data);
  };

  const deleteProject = async (id) => {
    const token = localStorage.getItem("token");

    const res = await fetch(`${API}/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` }
    });

    if (res.ok) {
      alert("Deleted!");
      fetchProjects();
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="contact--section">
      <h2>Manage Projects</h2>

      <Link className="btn btn-primary" to="/admin/projects/create">
        Add New Project
      </Link>

      <ul>
        {projects.map((p) => (
          <li key={p._id}>
            <strong>{p.title}</strong>
            <Link to={`/admin/projects/${p._id}/edit`}> Edit </Link>
            <button onClick={() => deleteProject(p._id)}> Delete </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
