import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const fetchContacts = useCallback(async () => {
    const res = await fetch(`${API}/api/contacts`, {
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) setContacts(data);
    else setError(data.error || "Unable to fetch contacts");
  }, [token]);

  const deleteContact = async (id) => {
    if (!window.confirm("Delete this contact?")) return;
    const res = await fetch(`${API}/api/contacts/${id}`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) fetchContacts();
    else alert(data.error || "Delete failed");
  };

  const deleteAll = async () => {
    if (!window.confirm("DELETE ALL CONTACTS?")) return;
    const res = await fetch(`${API}/api/contacts`, {
      method: "DELETE",
      headers: { Authorization: "Bearer " + token },
    });
    const data = await res.json();
    if (res.ok) fetchContacts();
    else alert(data.error || "Delete failed");
  };

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="admin-contacts-page">
      <h2>Admin: All Contacts</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button className="delete-all-btn" onClick={deleteAll}>
        Delete ALL Contacts
      </button>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>      {/* <-- ADDED */}
            <th>Topic</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((c) => (
            <tr key={c._id}>
              <td>{c.firstname} {c.lastname}</td>
              <td>{c.email}</td>
              <td>{c.phone || "—"}</td>   {/* <-- ADDED */}
              <td>{c.topic}</td>
              <td>{c.message}</td>
              <td>
                <button
                  className="btn-secondary"
                  onClick={() => navigate(`/admin/contacts/${c._id}`)}
                >
                  View / Edit
                </button>

                <button
                  className="btn-danger"
                  onClick={() => deleteContact(c._id)}
                  style={{ marginLeft: "10px" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
