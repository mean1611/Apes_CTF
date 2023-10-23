import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar.js";

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
        <Navbar  />
        <div className="banner-practice">
            <div class="practice-column">
                <div className="practice-banner-text">
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
    </div>
    
  );
}

export default index;