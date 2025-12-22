import React, { useState, useEffect } from "react";
import axios from "axios";
function home() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    axios
      .get("/api/")
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default home;
