import React, { useState, useEffect } from "react";
import "../../../assets/css/afterlog_dash.css";
import { useLocation } from "react-router-dom";

const Createprofile = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    exerciseLevel: "",
  });

  const [message, setMessage] = useState(null); // State for the message
  const location = useLocation();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Submit data to your backend here
  };

  useEffect(() => {
    // Check if there's a message in the location state
    const messageFromLocation = location.state && location.state.message;
    if (messageFromLocation) {
      // Set the message
      setMessage(messageFromLocation);
      // Set a timeout to clear the message after 5 seconds
      const timeoutId = setTimeout(() => {
        setMessage(null);
      }, 5000);
      // Clear the timeout when the component unmounts or when the message changes
      return () => clearTimeout(timeoutId);
    }
  }, [location.state]);

  return (
    <div className="user-profile-form mt-5">
      {message && (
        <div className="alert alert-success" role="alert">
          {message}
        </div>
      )}
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="height">Height:</label>
          <input
            type="number"
            name="height"
            id="height"
            value={formData.height}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Weight:</label>
          <input
            type="number"
            name="weight"
            id="weight"
            value={formData.weight}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exerciseLevel">Exercise Level:</label>
          <select
            name="exerciseLevel"
            id="exerciseLevel"
            value={formData.exerciseLevel}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createprofile;
