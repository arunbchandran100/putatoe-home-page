import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { useHistory } from 'react-router-dom';
//import constructionImage from './construction.jpg';
import './Swp.css';

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
        <Card.Img variant="top" src={"https://shorturl.at/itGQ3"} />
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
        <Card.Img variant="top" src={"https://shorturl.at/duvw8"} />
        <Card.Body>
          <Card.Title>Modular System</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
