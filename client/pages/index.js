import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/navbar.js";
import Banner from "../components/Banner.js";


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
      <Banner /> {/* ใช้ Banner ที่คุณสร้าง */}
      {/* แสดงข้อความ Loading หรือข้อมูลที่ได้จาก API ด้านล่างนี้ */}
      <p>{message}</p>
    </div>
  );
}

export default index;

