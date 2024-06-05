import React, { useState } from "react";
import "../../../assets/css/afterlog_dash.css";

const DietGoals = ({ goals = [] }) => {
  const [formValues, setFormValues] = useState({
    dietGoal: "",
    dietPreference: "Vegetarian",
    activityLevel: "Moderate",
    mealFrequency: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: name === "mealFrequency" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formValues);
  };

  return (
    <div className="diet-goals mt-5">
      <h3>Diet Goals</h3>
      {goals.length > 0 ? (
        <table className="diet-table">
          <tbody>
            {goals.map((goal, index) => (
              <tr key={index}>
                <td className="diet-goal">{goal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>
          <form onSubmit={handleSubmit} className="diet-goals-form">
            <div className="form-group">
              <label htmlFor="dietGoal">Diet Goal:</label>
              <select
                id="dietGoal"
                name="dietGoal"
                value={formValues.dietGoal}
                onChange={handleChange}
                className="form-control"
              >
                <option value="">Select Goal</option>
                <option value="Lose Weight">Lose Weight</option>
                <option value="Gain Weight">Gain Weight</option>
                <option value="Maintain Weight">Maintain Weight</option>
                <option value="Improve Fitness">Improve Fitness</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dietPreference">Diet Preferences:</label>
              <select
                id="dietPreference"
                name="dietPreference"
                value={formValues.dietPreference}
                onChange={handleChange}
                className="form-control"
              >
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Gluten-Free">Gluten-Free</option>
                <option value="Diary-Free">Diary-Free</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="activityLevel">Activity Level:</label>
              <select
                id="activityLevel"
                name="activityLevel"
                value={formValues.activityLevel}
                onChange={handleChange}
                className="form-control"
              >
                <option value="Sedentary">Sedentary</option>
                <option value="Moderate">Moderate</option>
                <option value="Active">Active</option>
              </select>
            </div>
            {/* <div className="form-group">
              <label>Meal Frequency:</label>
              <div className="meal-frequency-options">
                {[1, 2, 3, 4].map((frequency) => (
                  <label key={frequency} className="meal-frequency-option">
                    <input
                      type="radio"
                      name="mealFrequency"
                      value={frequency}
                      checked={formValues.mealFrequency === frequency}
                      onChange={handleChange}
                    />
                    <span>{frequency}</span>
                  </label>
                ))}
              </div>
            </div> */}
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DietGoals;
