import React, { useState } from "react";
import Navbar from "../components/home/navbar.js";
import swal from 'sweetalert2'; // เรียกใช้ SweetAlert
import { useDispatch } from 'react-redux'; // เรียกใช้ useDispatch เพื่อ dispatch ใน Redux
import { setLoggedInUser } from "../store/loginSlice"; // นำเข้า setUser action ของคุณ

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const data = {
      username: username,
      password: password,
    };
  
    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      if (response.status === 200) {
        // Replace this with actual code to fetch user data from your API
        const user = await fetchUserFromAPI(); // Define this function to fetch user data
  
        // ตั้งค่าสถานะผู้ใช้ใน Redux store
        dispatch(setLoggedInUser(user));
        swal.fire({
          icon: 'success',
          title: 'เข้าสู่ระบบสำเร็จ',
        });
      } else if (response.status === 401) {
        // แสดงแจ้งเตือนล้มเหลว
        swal.fire({
          icon: 'error',
          title: 'ข้อผิดพลาด',
          text: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง',
        });
      } else {
        // แสดงแจ้งเตือนข้อผิดพลาดอื่น ๆ
        swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาดในการเชื่อมต่อ API',
        });
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเชื่อมต่อ API", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className=" text-5xl font-bold base-200">Login</h1>
            <p className="py-6">
              ยินดีต้อนรับ! เข้าร่วมกับเราเพื่อเสริมสร้างทักษะและการเรียนรู้ใหม่ๆด้าน CTF
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body grid place-items-center">
              <img
                src="/images/smiley.png"
                style={{ width: "100px", height: "100px" }}
                alt="Smiley Face"
                flex
                justify-center
              />
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="input input-bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" onClick={handleLogin}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
