import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/api/projects`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await res.json();
      if (!res.ok) return setProjects([]);

      setProjects(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch error:", err);
      setProjects([]);
    }
  };

  const deleteProject = async (id) => {
    const token = localStorage.getItem("token");
    if (!window.confirm("Delete this project?")) return;

    const res = await fetch(`${API}/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) fetchProjects();
    else alert("Delete failed");
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="admin-projects-page">
      <h2>Manage Projects</h2>

      <div className="add-project-btn-wrapper">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/projects/create")}
        >
          Add New Project
        </button>
      </div>

      <div className="projects-container">
        {projects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          projects.map((p) => (
            <div key={p._id} className="project-card">
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              <div className="btn-wrapper">
                <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/admin/projects/${p._id}/edit`)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger"
                  onClick={() => deleteProject(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
