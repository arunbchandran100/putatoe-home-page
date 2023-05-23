import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { useHistory } from 'react-router-dom';
//import constructionImage from './construction.jpg';
import './Psp.css';

function ConstructionCard() {
  //const history = useHistory();

  /*const handleClick = () => {
    // Redirect to the desired page when the card is clicked
    history.push('/construction');
  };*/

  return (
    <div className="construction-card-container">
      <div className="category-heading">
        <h2>All Popular Service Providers</h2>
      </div>
      <div className="sub-heading">
        <h3>Construction</h3>
      </div>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://naukrirecruiter.naukri.com/profilePic/getpic?pid=1505716363rp3359736_medium4"} />
        <Card.Body>
          <Card.Title>Devi Construction</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"data:image/jpeg;base64,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"} />
        <Card.Body>
          <Card.Title>Pulak shops</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://mm.media-mccoymart.com/buy_catalog/image/catalog/products/2023/03/Horizontalsurface.webp"} />
        <Card.Body>
          <Card.Title>Waterproof System</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"data:image/jpeg;base64,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"} />
        <Card.Body>
          <Card.Title>Modular System</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
