import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; // เพิ่มการนำเข้านี้
import Navbar from "../components/home/navbar.js";
import Banner from "../components/home/Banner.js";
import Bodywhatisctf from "../components/home/bodywhatisctf.js";
import Bodyknowctf from "../components/home/bodyknowctf.js";
import Bodyjob from "../components/home/bodyjob.js";
import Footer from "../components/home/footer.js";
import Getstart from "../components/home/getstart.js";

function index() {
  const [message, setMessage] = useState("Loading");
  
  const user = useSelector((state) => state.user); // ใช้ useSelector เพื่อดึงข้อมูลผู้ใช้จาก Redux store
  const dispatch = useDispatch(); // ใช้ useDispatch เพื่อส่ง Action

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
      <Navbar />
      <Banner />
      <Bodywhatisctf />
      <Bodyknowctf />
      <Bodyjob />
      <Getstart />
      <Footer />
      {user && <p>Welcome, {user.username}!</p>} {/* แสดงชื่อผู้ใช้หากมีการล็อกอิน */}
    </div>
  );
}

export default index;
