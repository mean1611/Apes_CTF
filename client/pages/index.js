import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.js";


function index() {
  const [message, setMessage] = useState("Loading")

  useEffect(() => {
    fetch("http://localhost:8080/api/home").then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
      }
    )
  }, [])

  return (
    <div>
      <Navbar />
      
    </div>
  );
}

export default index;

