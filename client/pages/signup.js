import React, { useEffect, useState } from "react";
import Navbar from "../components/home/navbar.js";
import useValidation from "../function/validation.js";
import axios from "axios";
import Swal from "sweetalert2";

function index() {
  const [message, setMessage] = useState("Loading");
  const { errors, validateForm } = useValidation();

  useEffect(() => {
    fetch("http://localhost:3000/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMessage(data.message);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const values = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
      user_role_id: 2, // user role id for new users
    };
  
    if (validateForm(values)) {
      try {
        const response = await axios.post("http://localhost:8080/api/user", values);
        
        if (response.data.status === 200) {
          // Show a success message with the API message
          Swal.fire({
            title: "Success!",
            text: response.data.message, // Use the message from the API
            icon: "success",
            confirmButtonText: "OK",
          });
  
          // Redirect to the login page or perform any other actions
          window.location.href = "/login";
        } else {
          // Show an error message with the API message
          Swal.fire({
            title: "Error!",
            text: response.data.message, // Use the message from the API
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (error) {
        // Show a generic error message if the request fails
        Swal.fire({
          title: "Error!",
          text: "An error occurred while processing your request",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className=" text-5xl font-bold base-200">Sign Up Now!</h1>
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

              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="input input-bordered"
                    name="username"
                  />
                  {errors.username && <span>{errors.username}</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                  />
                  {errors.email && <span>{errors.email}</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                  />
                  {errors.password && <span>{errors.password}</span>}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm password"
                    className="input input-bordered"
                    name="confirmPassword"
                  />
                  {errors.confirmPassword && (
                    <span>{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
