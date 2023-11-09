import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();

    // Create an object with user details
    const authDetails = {
      email: email,
      password: password,
    };

    // Check if email already exists
    const emailExists = await checkEmailExists(email);

    if (emailExists) {
      setError("Email already exists. Please log in.");
      return;
    }

    // Send a POST request to the registration endpoint
    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authDetails),
    });

    // Parse the response JSON
    const data = await response.json();
    console.log(data);

    // Save registration details to data/db.json
    saveToDb(authDetails);

    // After successful registration, navigate to the home page
    console.log("Registering with email:", email);
    navigate("/");
  };

  // Function to check if email already exists
  const checkEmailExists = async (email) => {
    const response = await fetch(`http://localhost:8000/check-email?email=${email}`);
    const data = await response.json();
    return data.exists;
  };

  // Function to save registration details to data/db.json
  const saveToDb = async (authDetails) => {
    const dbResponse = await fetch("http://localhost:8000/data/db/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(authDetails),
    });

    const dbData = await dbResponse.json();
    console.log("Data saved to db.json:", dbData);
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Register;
