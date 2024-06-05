import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { Bar, Line } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

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

  return (
    <div className="user-profile container-fluid mt-5">
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
                  <strong>Gender:</strong> Male 
                </td>
                <td>
                  <strong>Age:</strong> 25 years
                </td>
                <td>
                  <strong>Phone Number:</strong> 263 281 480
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Height:</strong> 5.7 feet
                </td>
                <td>
                  <strong>weight:</strong> 65 kg
                </td>
                <td>
                  <strong>Excercise</strong> Medium
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

// import slider1 from "../../assets/images/slide1.jpeg";
// import slider2 from "../../assets/images/slide2.jpeg";
// import slider3 from "../../assets/images/slide3.png";
// import slider4 from "../../assets/images/slide4.jpeg";
// import slider5 from "../../assets/images/slide5.jpeg";

// import image2 from "../../assets/images/saphetiti.png";
// import image3 from "../../assets/images/shrimp_scampi.png";
// const Afterlog_dash = () => {
//   const sliderImages = [slider1, slider2, slider3, slider4, slider5];
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const featuredFoodsdeitals = [
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=768,574",
//       description: "Fresh sushi rolls",
//     },
//   ];
//   const featuredFoods = [
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://www.indianhealthyrecipes.com/wp-content/uploads/2015/10/pizza-recipe-1.jpg",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEQ8d_yAysSTk1jJGcPyuPSOH4qU-kH9KNLQ&s",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://www.thespruceeats.com/thmb/lmDJraajDXMJ9izsIfzNt79GrSs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pizzasupremehoriz-1ccfa0b1732b4c128427d19ae02a422b.jpg",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://img-global.cpcdn.com/recipes/3c83c44fb3c1d71c/1200x630cq70/photo.jpg",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiHE6DQd4IdwxHSnP44ZzkwekF9pTb9k8BQg&s",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Pizza",
//       category: "pizza",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWaMtnw1hKn0EDgFHmgjdBxmCAMeIyKORqJA&s",
//       description: "Delicious cheese pizza",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://img.freepik.com/free-photo/delicious-burger-with-many-ingredients-isolated-white-background-tasty-cheeseburger-splash-sauce_90220-1266.jpg?size=338&ext=jpg&ga=GA1.1.44546679.1717027200&semt=sph",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGVzY9OViR4XFf0JP7e70o5PxJ7Va1UbP4KA&s",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpo29xCpvN4Nsd-Kf6XGSe3SOlZJWL5Z0-FQ&s",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVrO9FKarrAGq08vByBi6iEz-wLoEUi7c_g&s",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Burger",
//       category: "burger",
//       image:
//         "https://thumbs.dreamstime.com/b/fresh-tasty-fast-food-burger-fries-cold-drink-refers-to-quick-convenient-obtain-prepare-serve-often-high-268576353.jpg",
//       description: "Juicy beef burger",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/French-fries-b9e3e0c.jpg?resize=768,574",
//       description: "Fresh sushi rolls",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://www.budgetbytes.com/wp-content/uploads/2023/12/air-fryer-french-fries-horizontal-hero-web-ready-1.jpg",
//       description: "Fresh sushi rolls",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuQEiqVAes7Q8cORM8HJf8mS9-2EqC26NxGQ&s",
//       description: "Fresh sushi rolls",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image: "https://i.ytimg.com/vi/lHyo8gv9AdE/maxresdefault.jpg",
//       description: "Fresh sushi rolls",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1nZ79NmpSXZJ7i_nlwraQmb-KKU1rN3Ca6Q&s",
//       description: "Fresh sushi rolls",
//     },
//     {
//       name: "Fries",
//       category: "fries",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrQCwraISRpTEIDSdshI6i1zhXWpAoke4piQ&s",
//       description: "Fresh sushi rolls",
//     },
//   ];
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     console.log(category);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Increment current slide index cyclically
//       setCurrentSlide((prevSlide) =>
//         prevSlide === sliderImages.length - 1 ? 0 : prevSlide + 1
//       );
//     }, 3000); // Change slide every 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const filteredFoods =
//     selectedCategory === "all"
//       ? featuredFoods
//       : featuredFoods.filter((food) => food.category === selectedCategory);
//   return (
//     <div>
//       <header className="home-header">
//         <h1>Welcome to Food Paradise</h1>
//         <p>Discover the best foods from around the world</p>
//       </header>
//       <div className="slider">
//         {sliderImages.map((img, index) => (
//           <div
//             key={index}
//             className="slide"
//             style={{
//               transform: `translateX(${-currentSlide * 100}%)`, // Slide position based on currentSlide
//             }}
//           >
//             <img
//               src={img}
//               alt={`Slide ${index + 1}`}
//               className="slider-image"
//             />
//           </div>
//         ))}
//       </div>
//       <section className="featured-foods">
//         <div className="food-grid">
//           {featuredFoodsdeitals.map((food, index) => (
//             <div key={index} className="food-card">
//               <img src={food.image} alt={food.name} />
//               <h3>{food.name}</h3>
//               <p>{food.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <nav className="nav-links">
//         <a href="#all" onClick={() => handleCategoryClick("all")}>
//           All
//         </a>
//         <a href="#burger" onClick={() => handleCategoryClick("burger")}>
//           Burger
//         </a>
//         <a href="#pizza" onClick={() => handleCategoryClick("pizza")}>
//           Pizza
//         </a>
//         <a href="#sushi" onClick={() => handleCategoryClick("fries")}>
//           Fries
//         </a>
//       </nav>
//       <section className="featured-foods">
//         <div className="food-grid">
//           {filteredFoods.map((food, index) => (
//             <div key={index} className="food-card">
//               <img src={food.image} alt={food.name} />
//               <h3>{food.name}</h3>
//               <p>{food.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };
// export default Afterlog_dash;
