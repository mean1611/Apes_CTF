import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar-usermanage.js";


function Usermange() {
  const [message, setMessage] = useState("Loading");
  const [clickedRowData, setClickedRowData] = useState(null); // เพิ่มตัวแปร state เพื่อเก็บค่าที่ส่งมา

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
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto mt-4">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Username</th>
                <th>Email</th>
                <th>Date Create</th>
                <th>Mange</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>cy.g@email.com</td>
                <td>02/02/2023</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleClick(1)}
                  >
                    Send Data
                  </button>
                </th>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>hart.h@email.com</td>
                <td>22/02/2023</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleClick(2)}
                  >
                    Send Data
                  </button>
                </th>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>braice.s@email.com</td>
                <td>20/05/2023</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => handleClick(3)}
                  >
                    Send Data
                  </button>
                </th>
              </tr>
            </tbody>
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
  );
}

export default Usermange;
