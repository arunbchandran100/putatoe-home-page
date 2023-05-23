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
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaWvtrNtJMOPz77TG7M63Nm8YPVONUZtcwvebxdxnlCvw1j1aAxt2y5D8H4WeA0TaY9lPEOl4PoIvc-ZMGoAab9b6G2GK6Q_uiho1lyUHI5hxc-nnkA4TK9bLLyMVNgIWduFitK9AzctACNDLqUR5hoF=w1160-h893-s-no"} />
        <Card.Body>
          <Card.Title>Cover Bricks</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaVIyNMWBml2ppUeSK8oeY3Y3e-KlWUgF3XmsEutXEFDMhZLiNCnViT_C7nbV0LmAVES8ZMl4Fyo7CTvHUNRKEiIUpi6ifdjOucN-P3Mvgo_CfCfMFCOr9fgkmRPUWvqyELkuwdoqMBqYYCXrKSDBNsX=w500-h500-s-no"} />
        <Card.Body>
          <Card.Title>Iron Rod</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
