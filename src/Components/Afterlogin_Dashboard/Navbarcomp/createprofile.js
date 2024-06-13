import React, { useState, useEffect } from "react";
import "../../../assets/css/afterlog_dash.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import authService from '../../../services/authservices';

const Createprofile = () => {
  const [formData, setFormData] = useState({
    user: "",
    user_age: "",
    user_gender: "",
    user_height: "",
    user_weight: "",
    user_exerciseLevel: "",
  });

  const [message, setMessage] = useState(null); // State for the message
  const [loading, setLoading] = useState(true); // State to track loading
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current user and set it in the form data
    authService.getCurrentUser()
      .then(currentUser => {
        setFormData(prevFormData => ({
          ...prevFormData,
          user: currentUser,
        }));
        setLoading(false); // Set loading to false once user data is fetched
      })
      .catch(error => {
        console.error("Error fetching current user:", error);
        setLoading(false); // Set loading to false even if there's an error
      });
  }, []);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Data:", formData);
    // Submit data to your backend here
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/create-profile/",
        formData
      );
      if (response.status === 201) {
        console.log(response.data.message); // For success message
        setMessage({ type: 'success', text: response.data.message });
        setTimeout(() => setMessage(null), 5000);
        navigate("/Dashboardlanding", { state: { message: response.data.message } });
      }
      // Handle success
    } catch (error) {
      console.error("Error:", error);
      setMessage({ type: 'error', text: error.message });
      setTimeout(() => setMessage(null), 5000);
    }
  };

  useEffect(() => {
    // Check if there's a message in the location state
    const messageFromLocation = location.state && location.state.message;
    if (messageFromLocation) {
      // Set the message
      setMessage({ type: 'success', text: messageFromLocation });
      // Set a timeout to clear the message after 5 seconds
      const timeoutId = setTimeout(() => {
        setMessage(null);
      }, 5000);
      // Clear the timeout when the component unmounts or when the message changes
      return () => clearTimeout(timeoutId);
    }
  }, [location.state]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile-form mt-5">
      {message && (
        <div className={`alert alert-${message.type}`} role="alert">
          {message.text}
        </div>
      )}
      <h1>User Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="user"
          value={formData.user}
          onChange={handleChange}
        />
        <div className="form-group">
          <label htmlFor="user_age">Age:</label>
          <input
            type="number"
            name="user_age"
            id="user_age"
            value={formData.user_age}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_gender">Gender:</label>
          <select
            name="user_gender"
            id="user_gender"
            value={formData.user_gender}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
            {/* <option value="other">Other</option> */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="user_height">Height:</label>
          <input
            type="number"
            name="user_height"
            id="user_height"
            value={formData.user_height}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_weight">Weight:</label>
          <input
            type="number"
            name="user_weight"
            id="user_weight"
            value={formData.user_weight}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="user_exerciseLevel">Exercise Level:</label>
          <select
            name="user_exerciseLevel"
            id="user_exerciseLevel"
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
