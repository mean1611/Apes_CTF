import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function SendReport() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

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
          title: "Warning!",
          text: response.data.message,
          icon: "warning",
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

  const handleClearFields = () => {
    setFormData({
      title: "",
      description: "",
    });
  };

  return (
    <div className="report-component card   shadow-xl  ">
      
      <div className="report-bar card-body ">
        <label className="label">
          <h2 className="label-text ">Report</h2>
        </label>
        <input
          type="text"
          placeholder="Title"
          className="input input-bordered w-full max-w-xs "
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <label className="label">
          <h2 className="label-text">Information</h2>
        </label>
        <textarea
          type="text"
          placeholder="Detail"
          className="report-detail  w-full h-full appearance-none block eounded-lg bg-base-100 border py-4 px-3 focus:outline-none"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          maxLength={255} // Set the maximum length
          
        />
        <div className="m-auto">
          <button className="btn bg-green-500 w-28 " onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn  w-28 ml-5" onClick={handleClearFields}>
            Clear
          </button> 
        </div>
      </div>
    </div>
  );
}

export default SendReport;
