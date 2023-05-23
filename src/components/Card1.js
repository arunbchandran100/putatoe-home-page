import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card1.css";

function Card2() {
  
    return (
      <div className="rechargephoto">
        <Card className="rechargephoto-card" /*onClick={handleClick}*/>
          <Card.Img variant="top" src="https://shorturl.at/dfwH6" />
        </Card>
        
        <Card className="rechargephoto-card" /*onClick={handleClick}*/>
          <Card.Img variant="top" src="https://shorturl.at/dfwH6" />
        </Card>
      </div>
    );
  }
  
  
export default Card2;
