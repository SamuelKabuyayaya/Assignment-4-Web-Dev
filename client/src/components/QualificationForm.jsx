import React, { useState } from "react";

export default function QualificationForm({ initialData = null, onSubmit }) {
  const [form, setForm] = useState({
    title: initialData?.title || "",
    firstname: initialData?.firstname || "",
    lastname: initialData?.lastname || "",
    email: initialData?.email || "",
    completion: initialData?.completion || "",
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
        <h2>Add Qualification</h2>
      <label>
        Title
        <input name="title" value={form.title} onChange={handleChange} required />
      </label>

      <label>
        First Name
        <input name="firstname" value={form.firstname} onChange={handleChange} required />
      </label>

      <label>
        Last Name
        <input name="lastname" value={form.lastname} onChange={handleChange} required />
      </label>

      <label>
        Email
        <input type="email" name="email" value={form.email} onChange={handleChange} required />
      </label>

      <label>
        Completion Date
        <input type="date" name="completion" value={form.completion} onChange={handleChange} required />
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
