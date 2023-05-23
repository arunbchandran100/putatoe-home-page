import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {  FiTv, FiDollarSign, FiSmartphone, FiBook, FiBriefcase, FiArrowRightCircle,FiMail, FiSun, FiDroplet, FiPlusCircle, FiBarChart2, FiServer } from 'react-icons/fi';
import { GiLightningTrio, GiWaterBottle } from 'react-icons/gi';
import "./Card2.css";

function CardGrid() {
  const cards = [
    { icon: <FiSmartphone />, title: "Prepaid Mobile Recharge" },
    { icon: <FiTv />, title: " DTH Recharge" },
    { icon: <FiDollarSign />, title: "Loans" },
    { icon: <FiSmartphone />, title: "Promotions" },
    { icon: <FiBook />, title: "News" },
    { icon: <FiBriefcase />, title: "Jobs" },
    { icon: <FiMail />, title: "Feedback" },
    { icon: <FiBarChart2 />, title: "Gas Bill" },
    { icon: <FiServer />, title: "Electricity Bill" },
    { icon: <FiDroplet />, title: "Water Bill" },
    { icon: <GiWaterBottle />, title: "Blog" },  
    { icon: <FiArrowRightCircle />, title: "See more" },
];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card key={index}>
          <Card.Body>
            <Card.Title>{card.icon}</Card.Title>
            <Card.Text>{card.title}</Card.Text>
            <Button variant="primary" className="recharge-button">{"Click here"}</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardGrid;
