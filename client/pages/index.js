import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar.js";
import Banner from "../components/home/Banner.js";
import Bodywhatisctf from "../components/home/bodywhatisctf.js";
import Bodyknowctf from "../components/home/bodyknowctf.js";
import Bodyjob from "../components/home/bodyjob.js";

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
      <Banner /> 
      <Bodywhatisctf/> 
      <Bodyknowctf/>
      <Bodyjob/>
    </div>
    
  );
}

export default index;

