import React, { useState,useEffect } from "react";
import Navbaruser from "@/components/user/navbarUser.js";
import Navbar from "../components/home/navbar.js";
import axios from "axios";
import Swal from "sweetalert2";
import SendReport from "@/components/user/sendReport";
import Footer from "@/components/home/footer";

function ReportPage() {
  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      setUserdata(storedData);
    }
  }, []);
  console .log(userdata)

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.title || !formData.description) {
      Swal.fire({
        title: "Error!",
        text: "Title and Description are required",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const values = {
      report_title: formData.title,
      report_desc: formData.description,
    };

    try {
      const response = await axios.post("http://localhost:8080/api/report", values);

      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          confirmButtonText: "OK",
        });
        setFormData({
          title: "",
          description: "",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: response.data.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "An error occurred while processing your request",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div>
      {userdata && userdata.user_role_id === 2 && <Navbaruser userData={userdata} />}
      <SendReport/>
      <Footer/>
    </div>
  );
}

export default ReportPage;
