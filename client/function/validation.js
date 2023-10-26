import { useState } from "react";

const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validateForm = (values) => {
    const newErrors = {};

    // Username validation
    if (!values.username) {
      newErrors.username = (
        <span style={{ color: "red" }}>Username is required</span>
      );
    } else if (values.username.length > 16 || values.username.length < 8) {
      newErrors.username = (
        <span style={{ color: "red" }}>
          Username must be between 8 and 16 characters long
        </span>
      );
    }

    // Email validation
    if (!values.email) {
      newErrors.email = (
        <span style={{ color: "red" }}>Email is required</span>
      );
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = (
        <span style={{ color: "red" }}>
          Please enter a valid email address
        </span>
      );
    }

    // Password validation
    if (!values.password) {
      newErrors.password = (
        <span style={{ color: "red" }}>Password is required</span>
      );
    } else if (values.password.length < 8) {
      newErrors.password = (
        <span style={{ color: "red" }}>
          Password must be at least 8 characters long
        </span>
      );
    } else if (values.confirmPassword !== values.password) {
      newErrors.confirmPassword = (
        <span style={{ color: "red" }}>Passwords do not match</span>
      );
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /*const submitForm = (values) => {
    if (validateForm(values)) {
      // Prepare data to send to API
      const data = {
        username: values.username,
        email: values.email,
        password: values.password,
      };

      // Send data to API
      fetch("http://localhost:8080/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // User has been created successfully
            console.log("User has been created successfully");
          } else {
            // There was an error creating the user
            console.log("There was an error creating the user");
          }
        });
    }
  };*/

  return { errors, validateForm, /*submitForm */};
};

export default useValidation;

