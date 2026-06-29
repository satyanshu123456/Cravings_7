import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import deliveryboy from "../assets/deliberyboy.png";
import api from "../config/api.config.js";

const Register = () => {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    gender: "",
    dob: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [validateError, setValidateError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password validation
    if (registerData.password !== registerData.confirmPassword) {
      setValidateError("Passwords do not match");
      return;
    }

    setValidateError("");

    const payload = {
      fullName: registerData.fullName,
      email: registerData.email.toLowerCase(),
      gender: registerData.gender,
      dob: registerData.dob,
      phone: registerData.phone,
      password: registerData.password,
    };

    try {
      const response = await api.post("/auth/register", payload);

      alert(response.data.message || "Registration Successful");

      // Form reset
      setRegisterData({
        fullName: "",
        email: "",
        gender: "",
        dob: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to Login
      navigate("/login");
    } catch (error) {
      console.error("Register Error:", error);

      alert(
        error.response?.data?.message ||
          error.message ||
          "Registration Failed"
      );
    }
  };

  const inputClass =
    "border p-2 rounded focus:outline-none focus:ring-2 focus:ring-(--accent)";

  return (
    <div className="min-h-[90vh] bg-linear-to-r from-(--secondary) to-(--primary) grid grid-cols-2 p-10">
      <div className="hidden md:block">
        <img src={deliveryboy} alt="Delivery Boy" className="rotate-y-180" />
      </div>

      <div className="w-2xl bg-(--background) rounded shadow p-10 flex flex-col justify-center">
        <h1 className="text-2xl font-bold mb-5">Create an Account</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <div className="col-span-2">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={registerData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={registerData.email}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label>Phone</label>
            <input
              type="tel"
              name="phone"
              value={registerData.phone}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={registerData.gender}
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={registerData.dob}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={registerData.password}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {validateError && (
            <p className="text-red-500 col-span-2">{validateError}</p>
          )}

          <button
            type="submit"
            className="col-span-2 bg-(--primary) text-white py-2 rounded hover:bg-(--accent)"
          >
            Register
          </button>
        </form>

        <div className="mt-5 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-(--primary) hover:underline"
          >
            Already have an account? Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;