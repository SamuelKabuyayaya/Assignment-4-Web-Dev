import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProjectForm from "./ProjectForm";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminEditProject() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API}/api/projects/${projectId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (!res.ok) throw new Error("Project not found");

        setInitialData({
          title: data.title || "",
          description: data.description || "",
        });
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    }

    load();
  }, [projectId]);

  const handleUpdate = async (projectData) => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API}/api/projects/${projectId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(projectData),
      });

      const data = await res.json();

      if (!res.ok) return alert(data.error || "Failed to update project");

      navigate("/admin/projects");
    } catch (err) {
      alert("Update failed.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!initialData) return <p>Project not found.</p>;

  return (
    <section className="admin-form-section">
      <ProjectForm onSubmit={handleUpdate} initialData={initialData} />
    </section>
  );
}
