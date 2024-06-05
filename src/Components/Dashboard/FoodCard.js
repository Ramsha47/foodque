import React from 'react';
import { Card } from 'react-bootstrap';
import StarIcon from '@mui/icons-material/Star';

const FoodCard = ({ food }) => {
  return (
    <Card className="food-card">
      <Card.Img variant="top" src={food.image} />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text>
          {[...Array(5)].map((_, i) =>
            i < food.rating ? (
              <StarIcon
                key={i}
                sx={{ color: '#FFD700', stroke: 'black', strokeWidth: 0.5 }}
              />
            ) 
            : (
              <StarIcon
                key={i}
                sx={{ color: 'white', stroke: 'black', strokeWidth: 0.5 }}
              />
            )
          )}
        </Card.Text>
        <Card.Text>{food.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;
