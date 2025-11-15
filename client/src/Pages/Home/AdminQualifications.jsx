import React, { useEffect, useState } from "react";
import { listQualifications, deleteQualification } from "../../api/qualificationApi";

export default function AdminQualifications() {
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");

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
    <section className="contact--section">
      <h2>Manage Qualifications</h2>

      <div className="education--container">
        {items.map((q) => (
          <div key={q._id} className="education--section--card">
            <h3>{q.title}</h3>
            <p>{q.firstname} {q.lastname}</p>
            <p>{q.email}</p>
            <p>{new Date(q.completion).toDateString()}</p>

            <button
              onClick={() => window.location.href = `/admin/qualifications/edit/${q._id}`}
              className="btn btn-primary"
              style={{ marginRight: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(q._id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
