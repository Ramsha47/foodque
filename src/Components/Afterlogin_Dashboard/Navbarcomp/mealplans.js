import React, { useState } from "react";
import "../../../assets/css/afterlog_dash.css";

const MealRecommendation = () => {
  const [formData, setFormData] = useState({
    selectedMeal: "",
    ingredients: "",
    review: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    // Submit data to your backend here
  };

  return (
    <div className="user-profile-form mt-5">
      <h1>Meal Recommendation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="selectedMeal">Select Meal:</label>
          <select
            name="selectedMeal"
            id="selectedMeal"
            value={formData.selectedMeal}
            onChange={handleChange}
            className="form-control"
            required
          >
            <option value="">Select</option>
            <option value="Chicken Curry">Chicken Curry</option>
            <option value="Vegetable Stir Fry">Vegetable Stir Fry</option>
            <option value="Salmon with Quinoa">Salmon with Quinoa</option>
            <option value="Pasta Primavera">Pasta Primavera</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="ingredients">See Ingredients:</label>
          <textarea
            name="ingredients"
            id="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="review">Give Reviews:</label>
          <textarea
            name="review"
            id="review"
            value={formData.review}
            onChange={handleChange}
            className="form-control"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default MealRecommendation;
