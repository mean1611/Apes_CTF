import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Navbaradmin from "../components/admin/navbarAdmin";
import ReportManagementcom from "../components/admin/reportmanagecom";
import Footer from "../components/home/footer";

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
    <div className="" >
      <Navbaradmin  />
      <div className="userreport  ">
       <div className="justify">
        <ReportManagementcom />
        </div>
      </div>
      <Footer/>
    </div>
    
  );
}

export default index;
