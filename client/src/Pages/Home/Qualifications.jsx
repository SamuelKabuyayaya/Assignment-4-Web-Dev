//This displays the an "Education" section with history cards
import React, { useEffect, useState } from "react";
import { listQualifications } from "../../api/qualificationApi";


export default function Qualifications(){
  const [items, setItems] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    async function load() {
      const data = await listQualifications(token);
      setItems(data);
    }
    load();
  }, [token]);

    return(
        //section container with and id for easy csss styling and navigation
        <section id="Education" className="education--section">

            {/*Section Heading*/}
            <p className="education--section--heading">My education</p>  

             <div className="education--container">
            {items.map((q) => (
            <div className="education--section--card" key={q._id}>
            <h3 className="education--degree">{q.title}</h3>
            <p className="education--institution">{q.firstname} {q.lastname}</p>
            <p className="education--year">
              {new Date(q.completion).toLocaleDateString()}
            </p>
            <p className="education--description">{q.description}</p>
          </div>
        ))}

            </div>
        </section>
    );
  }

