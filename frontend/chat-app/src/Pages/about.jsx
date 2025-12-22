import axios from "axios";
import React, { useState, useEffect } from "react";

function about() {
  const [Aboutmessage, setAboutMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/about")
      .then((res) => {
        setAboutMessage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>{Aboutmessage}</h1>
    </div>
  );
}

export default about;
