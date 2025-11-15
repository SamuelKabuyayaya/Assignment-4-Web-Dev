import React, { useEffect, useState } from "react";
import { updateQualification, listQualifications } from "../../api/qualificationApi";
import QualificationForm from "../../components/QualificationForm";
import { useParams } from "react-router-dom";

export default function AdminEditQualification() {
  const { id } = useParams();
  const token = localStorage.getItem("token");
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    async function load() {
      const all = await listQualifications(token);
      const match = all.find((q) => q._id === id);
      setInitialData(match);
    }
    load();
  }, [id]);

  const handleUpdate = async (data) => {
    const res = await updateQualification(token, id, data);
    alert(res.message || res.error);
  };

  if (!initialData) return <p>Loading...</p>;

  return (
    <section className="contact--section">
      <h2>Edit Qualification</h2>
      <QualificationForm initialData={initialData} onSubmit={handleUpdate} />
    </section>
  );
}
