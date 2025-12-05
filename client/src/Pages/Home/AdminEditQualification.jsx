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

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await listQualifications(token);
        const qual = data.find(q => q._id === id);
        if (qual) {
          setForm({
            title: qual.title || "",
            firstname: qual.firstname || "",
            lastname: qual.lastname || "",
            email: qual.email || "",
            completion: (qual.completion || "").slice(0, 10),
            description: qual.description || ""
          });
        }
      } catch (err) {
        console.error(err);
        // optionally show an error UI
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, [id, token]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await updateQualification(token, id, form);
      navigate("/admin/qualifications");
    } catch (err) {
      console.error(err);
      alert("Update failed.");
    }
  };

  if (loading) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <section className="admin-form-section">
      <form className="admin-project-form" onSubmit={handleSubmit}>
        <h2>Edit Qualification</h2>

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <label>First Name</label>
        <input
          type="text"
          name="firstname"
          value={form.firstname}
          onChange={handleChange}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          name="lastname"
          value={form.lastname}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Completion Date</label>
        <input
          type="date"
          name="completion"
          value={form.completion}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </section>
  );
}
