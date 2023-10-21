import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar.js";

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
      <Navbar  />
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className=" text-5xl font-bold base-200">Login</h1>
            <p className="py-6">ยินดีต้อนรับ! เข้าร่วมกับเราเพื่อเสริมสร้างทักษะและการเรียนรู้ใหม่ๆด้าน CTF</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body grid place-items-center">
            <img src="/images/smiley.png" style={{ width: '100px', height: '100px' }} alt="Smiley Face" flex justify-center />
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Username</span>
                </label>
                <input type="text" placeholder="Username" className="input input-bordered" />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    
  );
}

export default index;