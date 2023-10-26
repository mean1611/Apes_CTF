import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser";
import Profileuser from "../components/user/profileuser";
import SendReport from "../components/user/sendReport";
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
    <div >
      <Navbaruser  />
      <div className="userreport  grid grid-cols-4">
        <div className="mt-10 col-1">
        <Profileuser />
        </div>
       <div className="col-2 col-span-3">
        <SendReport />
        </div>
        
      </div>
  <Footer/>
    </div>
    
  );
}

export default index;