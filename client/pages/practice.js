import React, { useEffect, useState } from "react";
import Navbaruser from "../components/user/navbarUser.js";
import Categoryfilter from "../components/user/categoryFilter.js";
import Questioncom from "../components/user/questionCom.js";
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
        <div className="learn-body grid grid-cols-4  bg-primary text-base-100">
          <div className="col-start-1 col-end-2">
            <Categoryfilter/>
          </div>
          <div className=" place-items-center col-start-2 col-end-5">
            <Questioncom/>

          </div>
        </div>
    </div>
  );
}

export default index;