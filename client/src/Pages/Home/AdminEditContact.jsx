import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminEditContact() {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [contact, setContact] = useState(null);
  const [msg, setMsg] = useState("");
  const token = localStorage.getItem("token");

  const load = useCallback(async () => {
    const res = await fetch(`${API}/api/contacts/${contactId}`, {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) setContact(data);
  }, [contactId, token]);

  const update = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/api/contacts/${contactId}`, {
      method: "PUT",
      headers: { 
        "Content-Type": "application/json",
        Authorization: "Bearer " + token 
      },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    if (res.ok) setMsg("Updated successfully!");
    else setMsg(data.error);
  };

  useEffect(() => {
    load();
  }, [load]);

  if (!contact) return <p>Loading...</p>;

  return (

  <div className="admin-project-form">
      <p style={{ color: "green" }}>{msg}</p>
<h2>Edit Contact</h2>
<h2>Edit Contact</h2>
      <form onSubmit={update}>
        <label>First Name
          <input value={contact.firstname}
            onChange={(e) => setContact({ ...contact, firstname: e.target.value })} />
        </label>

        <label>Last Name
          <input value={contact.lastname}
            onChange={(e) => setContact({ ...contact, lastname: e.target.value })} />
        </label>

        <label>Email
          <input value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })} />
        </label>

        <label>Phone
          <input value={contact.phone || ""}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })} />
        </label>

        <label>Topic
          <input value={contact.topic || ""}
            onChange={(e) => setContact({ ...contact, topic: e.target.value })} />
        </label>

        <label>Message
          <textarea rows="6"
            value={contact.message}
            onChange={(e) => setContact({ ...contact, message: e.target.value })} />
        </label>
         <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" className="btn btn-primary" onClick={() => navigate("/admin/contacts")}style={{ marginLeft: "10px" }}>Back</button>
      </form>
    </div>
);
}