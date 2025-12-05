import React, { useState, useEffect } from "react";

export default function ProjectForm({ onSubmit, initialData }) {
  const [project, setProject] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setProject({
        title: initialData.title || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(project);
  };

  return (
    <form onSubmit={handleSubmit} className="admin-project-form">
      <label>
        Title
        <input
          type="text"
          name="title"
          value={project.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description
        <textarea
          rows="5"
          name="description"
          value={project.description}
          onChange={handleChange}
          required
        />
      </label>

      <button className="btn btn-primary">Save</button>
    </form>
  );
}
