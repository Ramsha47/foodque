import React from 'react';
// import CustomNavbar from './Navbar';
import FilterSidebar from './FilterSidebar';
import FoodCard from './FoodCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import  shrimpScampi from '../../assets/images/shrimp_scampi.png';
import  saphetiti from '../../assets/images/saphetiti.png';
import  spicyVegetableRamen from '../../assets/images/spicy_vegetable_ramen.png';
import  taquitos from '../../assets/images/taquitos.png';
import  freshGardenSalad from '../../assets/images/fresh_garden_salad.png';

const foods = [
  {
    name: 'Shrimp Scampi',
    rating: 3,
    description: 'Love it so much. The flavor of this fresh shrimp is unique.',
    image: shrimpScampi
  },
  {
    name: 'Saphetiti',
    rating: 4,
    description: 'A great to grab a decently delicious lunch on a typical weekday.',
    image: saphetiti
  },
  {
    name: 'Spicy Vegetable Ramen',
    rating: 3,
    description: 'Love it so much. The flavor of this fresh vegetables is unique.',
    image: spicyVegetableRamen
  },
  {
    name: 'Taquitos',
    rating: 5,
    description: 'Quite authentic. A little too spicy for my taste, but beef was quite flavorful.',
    image: taquitos
  },
  {
    name: 'Fresh Garden Salad',
    rating: 4,
    description: 'Super fresh and healthy. Tasted freshly picked and the dressing was superb.',
    image: freshGardenSalad
  },
];

const Dashboard = () => {
  return (
    <>
      {/* <CustomNavbar /> */}
      <div className="container-fluid">
        <div className="ms-5 ps-5 mb-5 mt-5">
          <h2>Good Morning, Jimmy!</h2>
          <p>Check your daily recommendation and add your interested ones into Wishlist.</p>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-3">
            <FilterSidebar />
          </div>
          <div className="col-md-8">
            <div className="row">
              {foods.map((food, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <FoodCard food={food} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Dashboard;
