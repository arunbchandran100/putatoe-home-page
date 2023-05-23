import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card1.css";

function Card2() {
  
    return (
      <div className="rechargephoto">
        <Card className="rechargephoto-card" /*onClick={handleClick}*/>
          <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaWFxO5RorisCvWkIvuMAkK2BfBN--ZnbU9no4dij-jSKPxpUHYisJzdCRS-vqdTrwLQ2eVchGvCzlisDsqstmjYwwxoBAAHMMp0q3gvBonv0GTmIETjixMgVWR51ddR3viLQ8VrO6GbM677m0vsEerK=w1080-h514-s-no?authuser=0" />
        </Card>
        
        <Card className="rechargephoto-card" /*onClick={handleClick}*/>
          <Card.Img variant="top" src="https://lh3.googleusercontent.com/pw/AJFCJaWFxO5RorisCvWkIvuMAkK2BfBN--ZnbU9no4dij-jSKPxpUHYisJzdCRS-vqdTrwLQ2eVchGvCzlisDsqstmjYwwxoBAAHMMp0q3gvBonv0GTmIETjixMgVWR51ddR3viLQ8VrO6GbM677m0vsEerK=w1080-h514-s-no?authuser=0" />
        </Card>
      </div>
    );
  }
  
  
export default Card2;
