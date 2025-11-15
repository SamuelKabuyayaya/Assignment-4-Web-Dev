import React from "react";
import QualificationForm from "../../components/QualificationForm";
import { createQualification } from "../../api/qualificationApi";

export default function AdminAddQualification() {
  const token = localStorage.getItem("token");

  const handleCreate = async (data) => {
    const res = await createQualification(token, data);
    alert(res.message || res.error);
  };

  return (
    <section className="contact--section">
      <h2>Add Qualification</h2>
      <QualificationForm onSubmit={handleCreate} />
    </section>
  );
}
