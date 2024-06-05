import React from 'react';
import { Meals } from "../../Data";

const Meal = () => {
    return (
        <>
          <section className="menu" id="menu">
            <h1 className="heading">
              our <span>Meals</span>
            </h1>
    
            <div className="box-container">
            
              {Meals.map((item, index) => (
                <div className="box" key={index * Math.random()}>
                    
           


                  <img src={item.Image} alt="" />
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                </div>
              ))}
            </div>
          </section>
        </>
      );
    
  
}

export default Meal
