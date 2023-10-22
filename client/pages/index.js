import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar.js";
import Banner from "../components/home/Banner.js";
import Bodywhatisctf from "../components/home/bodywhatisctf.js";
import Bodyknowctf from "../components/home/bodyknowctf.js";
import Bodyjob from "../components/home/bodyjob.js";
import Footer from "../components/home/footer.js";
import Getstart from "../components/home/getstart.js";
import Navbaradmin from "../components/admin/navbarAdmin.js";

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
      <Navbaradmin  />
      <Banner /> 
      <Bodywhatisctf/> 
      <Bodyknowctf/>
      <Bodyjob/>
      <Getstart/>
      <Footer/>
    </div>
    
  );
}

export default index;

