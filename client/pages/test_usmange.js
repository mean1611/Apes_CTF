import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar-usermanage.js";

function Index() {
  const [message, setMessage] = useState("Loading");
  const [clickedRowData, setClickedRowData] = useState(null); // เพิ่มตัวแปร state เพื่อเก็บค่าที่ส่งมา
  const [userInfo, setUserInfo] = useState(null); // เพิ่มตัวแปร state เพื่อเก็บข้อมูล User Info

  const handleClick = (rowId) => {
    // ทำการส่งข้อมูลด้านล่างตารางที่มี rowId ที่ระบุ
    console.log(`Sending data for row ${rowId}`);

    // เรียก API หรือทำการประมวลผลข้อมูลที่คุณต้องการแสดงด้านล่าง
    const rowData = {
      // ข้อมูลที่คุณต้องการแสดง
      // เช่น { name: 'John', age: 30, ... }
    };

    // ตั้งค่าข้อมูลที่ส่งมาในตัวแปร state
    setClickedRowData(rowData);
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });

    // เรียก API หรือประมวลผลข้อมูล User Info และตั้งค่าในตัวแปร state
    const userInfoData = {
      // ข้อมูล User Info ที่คุณต้องการแสดง
      // เช่น { username: 'user123', email: 'user@example.com', ... }
    };
    setUserInfo(userInfoData);
  }, []);

  return (
    <div>
    {/* Navbar */}
    <Navbar />
    <div className="flex">
      {/* User Info (ด้านซ้าย) */}
      <div className="w-1/4 p-4 border-r">
        <h2>User Info</h2>
        {userInfo && (
          <div>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            {/* เพิ่มข้อมูล User Info ตรงนี้ */}
          </div>
        )}
      </div>

      {/* ตาราง (ด้านขวา) */}
      <div className="w-3/4 p-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* ...โค้ดตารางเหมือนเดิม... */}
          </table>
        </div>

        {/* แสดงค่าที่ส่งมาด้านล่างของตาราง */}
        {clickedRowData && (
          <div className="mt-4">
            <h2>Clicked Row Data:</h2>
            <pre>{JSON.stringify(clickedRowData, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
    </div>
  );
}

export default Index;
