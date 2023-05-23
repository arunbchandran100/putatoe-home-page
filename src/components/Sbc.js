import React from "react";
import Card from 'react-bootstrap/Card';
//import { useHistory } from 'react-router-dom';
//import constructionImage from './construction.jpg';
import './Sbc.css';

function ConstructionCard() {
  //const history = useHistory();

  /*const handleClick = () => {
    // Redirect to the desired page when the card is clicked
    history.push('/construction');
  };*/

  return (
    <div className="construction-card-container">
      <div className="category-heading">
        <h2>SHOP BY CATEGORY</h2>
      </div>
      <div className="sub-heading">
        <h3>Construction</h3>
      </div>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://www.jalaram-group.in/uploads/jalaram-cement-bricks-works/products/product-52.jpg?t=1670662231"} />
        <Card.Body>
          <Card.Title>Cover Bricks</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://static.connect2india.com/c2icd/product_resources/images/iron-steel-rod.jpg"} />
        <Card.Body>
          <Card.Title>Iron Rod</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
