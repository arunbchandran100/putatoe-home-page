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
            "https://lh3.googleusercontent.com/pw/AJFCJaU1jbqkpuh_b_hiN10rc32_gTgNt-3ah1SJyuHYAuphTkOF24ddoaGk5sW8qaqaMXpb1y6gVoIe5BELPtPlB_5JvnH7zrMFuFqazbF-vBikAmdJyLogNaLmWwxRVlTGwpHJQ2Yasah-M9iusIvlZL1n=w835-h893-s-no"
          }
        />
        <Card.Body>
          <Card.Title>Daily Needs</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaUzAbn3Z5UHYFLqnpncORpTjWCO6r0wmvBvpKsTpIVaHUaD9XLZVp3UD2k8qmYkU3EMKvBXa7-L4EykaZNqu_sTZRgY5JXkRLj3KQY5XhmQ9FWfIi5PWDuTHXp0OF7XrkFYc_B7YT-j1dsUNdeOvw4e=w845-h893-s-no"} />
        <Card.Body>
          <Card.Title>Construction</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img
          variant="top"
          src={
            "https://lh3.googleusercontent.com/pw/AJFCJaVmiP7Vu4nqkysjRY6PD73scZVugvIxlTTvoBOJjwHPbSGshsmtiRpMJXxE80O1EE7ZdLMtCMY6PVQh7TkZp7JWMG7MAtC3h02fI4S0qOiASK1swazNk4GNgYXn-NN0mUfUWnbVrgyFrLrJ3F8Y_Raq=w400-h300-s-no"
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
