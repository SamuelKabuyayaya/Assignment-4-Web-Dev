const API = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const createQualification = async (token, data) => {
  const res = await fetch(`${API}/api/qualifications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const listQualifications = async (token) => {
  const res = await fetch(`${API}/api/qualifications`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return res.json();
};

export const updateQualification = async (token, id, data) => {
  const res = await fetch(`${API}/api/qualifications/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteQualification = async (token, id) => {
  const res = await fetch(`${API}/api/qualifications/${id}`, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token },
  });
  return res.json();
};
