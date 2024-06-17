import React, { useState, useEffect} from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import authService from '../../services/authservices';


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import image1 from "../../assets/images/pic-1.png";
import DietGoals from "./Navbarcomp/dietgoals";
import MealPlans from "./Navbarcomp/mealplans";

import "../../assets/css/afterlog_dash.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const UserProfile = () => {
  const [key, setKey] = useState("dietgoals");
  const [notificationsOn, setNotificationsOn] = useState(true); // State to manage notifications
  const [userProfile, setUserProfile] = useState(null);
  const [message, setMessage] = useState(null); // State for the message
  const location = useLocation();

  // Function to toggle notifications
  const toggleNotifications = () => {
    setNotificationsOn((prevState) => !prevState);
  };
  const dataBar = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Diet Goals meet",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const dataLine = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Excercise Goals meet",
        data: [33, 53, 85, 41, 44, 65, 30],
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  const dietGoals = [
    "Eat more vegetables",
    "Reduce sugar intake",
    "Increase protein consumption",
    "Drink more water",
    "Avoid processed foods",
    "Include more fiber in your diet",
    "Limit alcohol consumption",
    "Eat more whole grains",
    "Plan meals ahead of time",
    "Reduce sodium intake",
  ];

  const mealPlans = [
    {
      title: "Low-Carb Meal Plan",
      description: "A meal plan focusing on reducing carbohydrate intake.",
      meals: {
        breakfast: "Scrambled eggs with spinach and avocado",
        lunch: "Grilled chicken salad with olive oil dressing",
        dinner: "Steak with roasted vegetables",
      },
    },
    {
      title: "Mediterranean Meal Plan",
      description:
        "A meal plan inspired by the traditional dietary patterns of Mediterranean countries.",
      meals: {
        breakfast: "Greek yogurt with honey and nuts",
        lunch: "Grilled salmon with quinoa and vegetables",
        dinner: "Chicken souvlaki with tzatziki and a side salad",
      },
    },
    {
      title: "Vegan Meal Plan",
      description:
        "A meal plan that excludes all animal products and focuses on plant-based foods.",
      meals: {
        breakfast: "Oatmeal with almond milk and fresh berries",
        lunch: "Quinoa salad with black beans and avocado",
        dinner: "Stir-fried tofu with mixed vegetables",
      },
    },
    {
      title: "Paleo Meal Plan",
      description:
        "A meal plan based on the types of foods presumed to have been eaten by early humans.",
      meals: {
        breakfast: "Fruit smoothie with almond butter",
        lunch: "Grilled chicken with sweet potato",
        dinner: "Baked salmon with asparagus",
      },
    },
    {
      title: "Keto Meal Plan",
      description: "A high-fat, adequate-protein, low-carbohydrate meal plan.",
      meals: {
        breakfast: "Keto pancakes with butter",
        lunch: "Avocado salad with bacon and eggs",
        dinner: "Grilled pork chops with green beans",
      },
    },
  ];

  const preferences = [
    {
      category: "Dietary Restrictions",
      items: ["Vegetarian", "Gluten-Free", "Nut Allergy"],
    },
    {
      category: "Favorite Foods",
      items: ["Avocado", "Quinoa", "Blueberries"],
    },
    {
      category: "Fitness Goals",
      items: ["Build Muscle", "Improve Flexibility", "Increase Stamina"],
    },
    {
      category: "Lifestyle Preferences",
      items: ["Morning Exercise", "Meditation", "No Smoking"],
    },
    {
      category: "Health Concerns",
      items: ["High Blood Pressure", "Diabetes", "Cholesterol"],
    },
    {
      category: "Preferred Cuisines",
      items: ["Italian", "Mexican", "Japanese"],
    },
  ];

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

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const userId = await authService.getCurrentUser();
        const accessToken = authService.getAccessToken();

        console.log("userId: ",  userId);
        const response = await axios.get(`http://127.0.0.1:8000/get-user-profile/?user_id=${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        
        if (response.data.length > 0) {
          console.log(response.data);
          setUserProfile(response.data[0]); // Assuming the first element is the user profile
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  const gender = userProfile.user_gender === "M" ? "Male" : userProfile.user_gender === "F" ? "Female" : "Other";
  const exerciseLevel = userProfile.user_exercise_level === "L" ? "Low" : userProfile.user_exercise_level === "M" ? "Moderate" : userProfile.user_exercise_level === "H" ? "High" : "Unknown";

  return (
    <div className="user-profile container-fluid mt-5">
     {message && (
        <div className={`alert alert-${message.type}`} role="alert">
          {message.text}
        </div>
      )}
      <div className="d-flex align-items-center mt-5 profil-info vertical-border">
        <div className="user-info col-md-4 text-center">
          <img
            src={image1}
            alt="User"
            className="user-img rounded-circle mb-2 profile-image"
          />
          <h2>Jannie Regel</h2>
          {/* <p>214 rates - 85% trust</p> */}
        </div>
        <div className=" user-details col-md-8 my-5">
          <table className="table  custom-table">
            <tbody>
              <tr>
                <td>
                  <strong>Gender:</strong> {gender}
                </td>
                <td>
                  <strong>Age:</strong> {userProfile.user_age} years
                </td>
                <td>
                  <strong>Phone Number:</strong> 263 281 480
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Height:</strong> {userProfile.user_height} feet
                </td>
                <td>
                  <strong>weight:</strong> {userProfile.user_weight} kg
                </td>
                <td>
                  <strong>Excercise</strong> {exerciseLevel}
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Language:</strong> English
                </td>
                <td>
                  <strong>Get Notifications:</strong>
                  <a onClick={toggleNotifications}>
                    <FontAwesomeIcon
                      icon={notificationsOn ? faToggleOn : faToggleOff}
                      style={{ color: notificationsOn ? "green" : "white" }}
                    />
                  </a>
                </td>
                <td>
                  <strong>Range for Notifications:</strong> 5km
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row mb-4 ">
        <div className="col-md-6 graph-shadow">
          <Bar data={dataBar} />
        </div>
        <div className="col-md-6 graph-shadow">
          <Line data={dataLine} />
        </div>
      </div>
      <div className="tabs-shadow pb-5">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3"
        >
          <Tab eventKey="dietgoals" title="Diet Goals">
            <div className="diet-goals">
              <h3>Diet Goals</h3>
              {dietGoals.length > 0 ? (
                <table className="diet-table">
                  <tbody>
                    {dietGoals.map((goal, index) => (
                      <tr key={index}>
                        <td className="diet-goal">{goal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No diet goals available.</p>
              )}
            </div>
          </Tab>
          {/* <Tab eventKey="mealplans" title="Meal Plans">
            <div className="meal-plans">
              <h1>Meal Plans</h1>
              {mealPlans.length === 0 ? (
                <p>No meal plans available.</p>
              ) : (
                <table className="meal-plans-table">
                  <tbody>
                    {mealPlans.map((plan, index) => (
                      <React.Fragment key={index}>
                        <tr className="meal-plan-title">
                          <td colSpan="2">{plan.title}</td>
                        </tr>
                        <tr>
                          <td colSpan="2" className="meal-plan-description">
                            {plan.description}
                          </td>
                        </tr>
                        <tr>
                          <td className="meal-type">Breakfast</td>
                          <td className="meal-detail">
                            {plan.meals.breakfast}
                          </td>
                        </tr>
                        <tr>
                          <td className="meal-type">Lunch</td>
                          <td className="meal-detail">{plan.meals.lunch}</td>
                        </tr>
                        <tr>
                          <td className="meal-type">Dinner</td>
                          <td className="meal-detail">{plan.meals.dinner}</td>
                        </tr>
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Tab> */}
          <Tab eventKey="userpreferences" title="User Preferences">
            <div className="user-preferences">
              <h1>User Preferences</h1>
              {preferences.length === 0 ? (
                <p>No preferences available.</p>
              ) : (
                <table className="preferences-table">
                  <tbody>
                    {preferences.map((preference, index) => (
                      <React.Fragment key={index}>
                        <tr className="preference-category">
                          <td colSpan="2">{preference.category}</td>
                        </tr>
                        {preference.items.map((item, idx) => (
                          <tr key={idx}>
                            <td className="preference-item">{item}</td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfile;

