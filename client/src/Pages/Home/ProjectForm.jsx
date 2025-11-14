import React, { useState } from "react";

export default function ProjectForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [src, setSrc] = useState(initialData?.src || "");
  const [githubLink, setGithubLink] = useState(initialData?.githubLink || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, src, githubLink });
  };

  return (
    <section className="contact--section">
      <h2>{initialData ? "Edit Project" : "Add New Project"}</h2>

      <form className="contact--form--container" onSubmit={handleSubmit}>

        <label className="contact--label">
          <span className="text-md">Project Title</span>
          <input
            type="text"
            className="contact--input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label className="contact--label">
          <span className="text-md">Image Path</span>
          <input
            type="text"
            className="contact--input"
            value={src}
            onChange={(e) => setSrc(e.target.value)}
            placeholder="/img/Project1.png"
            required
          />
        </label>

        <label className="contact--label">
          <span className="text-md">GitHub Link</span>
          <input
            type="url"
            className="contact--input"
            value={githubLink}
            onChange={(e) => setGithubLink(e.target.value)}
            required
          />
        </label>

        <label className="contact--label">
          <span className="text-md">Description</span>
          <textarea
            className="contact--input"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </label>

        <button className="btn btn-primary">Save</button>
      </form>
    </section>
  );
}
