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
        <Navbaruser />
        <div className="banner-practice">
            <div class="practice-column ">
                <div className="practice-banner-text ">
                    <h1>Practice</h1>
                    <p>เพราะความรู้เป็นสิ่งสำคัญ</p>
                    <p>ไม่ยากอย่างที่คิด</p>
                </div>
            </div>
            <div class="practice-column ">
              <img
                  src="/images/practice-pageicon.png" // เปลี่ยนเป็นที่อยู่ของรูปภาพของคุณ
                  alt="Banner Image"
                  className="banner-image"
              /> 
            </div>
        </div>
        
        <div className="practice-body grid grid-cols-3 gap-4 place-items-center text-base-100">
            <a href="/generalskill" className="category-btn btn btn-ghost text-primary" >
              <img src="/images/skills.png" />  
              <h1>General Skills</h1>
            </a>
            
            <a href="/cryptography" className="category-btn btn btn-ghost text-primary" >
              <img src="/images/cryptography.png" />  
              <h1>Cryptography</h1>
            </a>

            <a href="/webmobile" className="category-btn btn btn-ghost text-primary" >
              <img src="/images/mobile.png" />  
              <h1>Web/Mobile <br/> Exploitation</h1>
            </a>

            <a href="/forensics" className="category-btn btn btn-ghost text-primary" >
              <img src="/images/forensics.png" />  
              <h1>Forensics</h1>
            </a>

            <a href="/reverseeng" className="category-btn btn btn-ghost text-primary" >
              <img src="/images/reverseengineering.png" />  
              <h1>Reverse <br/> Engineering</h1>
            </a>
        </div>
  </div>
    
  );
}

export default index;