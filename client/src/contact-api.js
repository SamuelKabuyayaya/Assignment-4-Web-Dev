const API_URL = "http://localhost:8000"; 

export const createContact = async (contactData) => {
  try {
    let response = await fetch(`${API_URL}/api/contacts`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    });

    return response.json();
  } catch (err) {
    return { error: "Network error" };
  }
};