import React from "react";
import { useNavigate } from "react-router-dom";
import QualificationForm from "../../components/QualificationForm";
import { createQualification } from "../../api/qualificationApi";

export default function AdminAddQualification() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleCreate = async (data) => {
    const res = await createQualification(token, data);
    if (!res.error) {
      alert("Qualification added successfully");
      navigate("/admin/qualifications"); // redirect after add
    } else {
      alert(res.error);
    }
  };

  return (
    <section className="admin-form-section">
      <QualificationForm onSubmit={handleCreate} />
    </section>
  );
}
