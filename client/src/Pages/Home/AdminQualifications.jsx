import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listQualifications, deleteQualification } from "../../api/qualificationApi";

export default function AdminQualifications() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const load = async () => {
    const data = await listQualifications(token);
    setItems(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Delete this qualification?")) {
      await deleteQualification(token, id);
      load();
    }
  };

  return (
    <section className="admin-qualifications-page">
      <h2>Manage Qualifications</h2>

      {/* Add Qualification Button */}
      <div className="add-qualification-btn-wrapper">
        <button className="btn btn-primary" onClick={() => navigate("/admin/qualifications/add")}>
          Add Qualification
        </button>
      </div>

      {/* Qualification Cards */}
      <div className="education--container">
        {items.map((q) => (
          <div key={q._id} className="education--section--card">
            <h3>{q.title}</h3>
            <p>{q.firstname} {q.lastname}</p>
            <p>{q.email}</p>
            <p>{new Date(q.completion).toDateString()}</p>

            <div className="btn-wrapper">
              <button className="btn btn-primary" onClick={() => navigate(`/admin/qualifications/edit/${q._id}`)}>
                Edit
              </button>
              <button className="btn btn-danger" onClick={() => handleDelete(q._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
