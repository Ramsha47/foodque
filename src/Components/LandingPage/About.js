import React from "react";
// import AboutImg from "../assets/images/about-img";
const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us
        </h1>

        <div className="row">
          <div className="image">
            <img src="https://mymetabolicmeals.com/cdn/shop/files/Home_SupportImages_Meal-Collage_ba7b3fcf-68bb-4952-aea2-9920385ec6fa.png?v=1673542356" alt="" />
          </div>

          <div className="content">
            <h3>Where Every Click Leads to Culinary Bliss</h3>
            <p>
            The FoodQue initiative was created with the aim of addressing nutritional and health issues through the utilization of  technology and data-driven analysis.
             
            </p>
            <p>
            By providing personalized dietary recommendations, the project seeks to empower individuals in making healthier and more informed food choices, thereby enhancing their overall well-being and promoting better health outcomes.
            </p>
            <a href="#" className="btn">
              learn more
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;