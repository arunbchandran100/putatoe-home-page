import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import { useHistory } from 'react-router-dom';
//import constructionImage from './construction.jpg';
import "./Swp.css";

function ConstructionCard() {
  //const history = useHistory();

  /*const handleClick = () => {
    // Redirect to the desired page when the card is clicked
    history.push('/construction');
  };*/

  return (
    <div className="construction-card-container">
      <div className="category-heading">
        <h2>Services We Provide</h2>
      </div>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img
          variant="top"
          src={
            "https://thumbs.dreamstime.com/z/happy-young-woman-walking-supermarket-shopping-cart-full-groceries-girl-buying-food-grocery-store-cartoon-flat-vector-119182782.jpg"
          }
        />
        <Card.Body>
          <Card.Title>Daily Needs</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://thumbs.dreamstime.com/z/building-construction-industry-cartoon-background-workers-construction-workers-vector-illustration-construction-builder-139598398.jpg"} />
        <Card.Body>
          <Card.Title>Construction</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img
          variant="top"
          src={
            "https://cdn.dribbble.com/users/783963/screenshots/5210455/full_build_2_still_2x.gif?compress=1&resize=400x300"
          }
        />
        <Card.Body>
          <Card.Title>Consultancy</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
