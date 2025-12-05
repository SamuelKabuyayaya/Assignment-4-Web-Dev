import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminEditProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    src: "",
    githubLink: "",
    description: ""
  });

  useEffect(() => {
    const loadProject = async () => {
      try {
        const res = await fetch(`${API}/api/projects/${projectId}`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const data = await res.json();

        if (!res.ok) throw new Error("Project not found");

        setForm({
          title: data.title || "",
          src: data.src || "",
          githubLink: data.githubLink || "",
          description: data.description || ""
        });
      } catch (err) {
        console.error(err);
      }
    };

    loadProject();
  }, [projectId, token]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API}/api/projects/${projectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok) return alert(data.error || "Update failed");

      navigate("/admin/projects");
    } catch (err) {
      alert("Failed to update project.");
    }
  };

  return (
    <section className="admin-form-section">
      <form className="admin-project-form" onSubmit={handleSubmit}>
        <h2>Edit Project Info</h2>

        <label>Project Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>Image Path</label>
        <input
         type="text"
         name="src"          
         value={form.src}     
         onChange={handleChange}
         required
        />

        <label>GitHub Link</label>
        <input
          type="text"
          name="githubLink"  
          value={form.githubLink}
          onChange={handleChange}
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </section>
  );
}
