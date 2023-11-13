import React, { useState } from "react";
import Navbar from "../components/home/navbar";
import axios from "axios";
import Swal from "sweetalert2";

function ReportPage() {
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
      <Navbar />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold base-200">Send a Report</h1>
            <p className="py-6">Please provide the Title and Description for your report.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body grid place-items-center">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Title"
                    className="input input-bordered"
                    name="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    placeholder="Description"
                    className="textarea textarea-bordered"
                    name="description"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportPage;
