import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { listQualifications, updateQualification } from "../../api/qualificationApi";

export default function AdminEditQualification() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [form, setForm] = useState({
    title: "",
    firstname: "",
    lastname: "",
    email: "",
    completion: "",
    description: ""
  });

  useEffect(() => {
    const loadData = async () => {
      const data = await listQualifications(token);
      const qual = data.find(q => q._id === id);
      if (qual) {
        setForm({
          title: qual.title,
          firstname: qual.firstname,
          lastname: qual.lastname,
          email: qual.email,
          completion: qual.completion.slice(0,10),
          description: qual.description
        });
      }
    };
    loadData();
  }, [id, token]);

  const handleChange = e => setForm({...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await updateQualification(token, id, form);
    navigate("/admin/qualifications");
  };

  return (
    <section className="admin-form-section">
      <h2>Edit Qualification</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" value={form.title} onChange={handleChange} placeholder="Title" required/>
        <input type="text" name="firstname" value={form.firstname} onChange={handleChange} placeholder="First Name" required/>
        <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="Last Name" required/>
        <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required/>
        <input type="date" name="completion" value={form.completion} onChange={handleChange} required/>
        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" required/>
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </section>
  );
}
