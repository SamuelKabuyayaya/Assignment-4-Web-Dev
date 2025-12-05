import React, { useState } from "react";

export default function ProjectForm({ initialData = null, onSubmit }) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    src: initialData?.src || "",
    githubLink: initialData?.githubLink || "",
    description: initialData?.description || "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form className="admin-project-form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <label>
        Project Title
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Image Path
        <input
          type="text"
          name="src"
          value={form.src}
          onChange={handleChange}
          placeholder="/img/Project1.png"
          required
        />
      </label>

      <label>
        GitHub Link
        <input
          type="url"
          name="githubLink"
          value={form.githubLink}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Description
        <textarea
          rows="4"
          name="description"
          value={form.description}
          onChange={handleChange}
        />
      </label>

      <button className="btn btn-primary">Save</button>
    </form>
  );
}
