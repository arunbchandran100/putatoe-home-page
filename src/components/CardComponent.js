import React from 'react';
import Card from 'react-bootstrap/Card';

const CardComponent = ({ card }) => {
  return (
    <Card>
      <Card.Img variant="top" src={card.image} alt="Card Image" />
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text>{card.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
