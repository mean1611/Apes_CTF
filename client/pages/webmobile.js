import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser";


function index() {
  const [message, setMessage] = useState("Loading")

  useEffect(() => {
    fetch("http://localhost:3000/api/home").then(
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
      <Navbaruser/>
    </div>
    
  );
}

export default index;

