

import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card2.css";

function Card2() {
  const icons = [
    "fa-mobile",
    "fa-satellite",
    "fa-university",
    "fa-bullhorn",
    "fa-newspaper",
    "fa-book",
    "fa-briefcase",
    "fa-comments",
    "fa-gas-pump",
    "fa-lightbulb",
    "fa-tint",
    "fa-ellipsis-h"
  ];

  const buttons = [
    "Prepaid Mobile Recharge",
    "DTH Recharge",
    "Loans",
    "Promotions",
    "News",
    "Blog",
    "Jobs",
    "Feedback",
    "Gas",
    "Electricity",
    "Water Bill",
    "See More"
  ];

  return (
    <div className="card-container">
      {icons.map((icon, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Android_robot.svg/1200px-Android_robot.svg.png" />
          <Card.Body>
            <Button variant="primary">{buttons[index]}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Card2;
