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
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaWFrrLW_WmMLWPPO9GKiQoA1HdKGfl2AgryU75G7qwGnapkeDJwATdxXoIB3yh2xw9-s9KR9KAUuTj8m3W91G8ATeEZNi7Un1OidgVtcRGv3w4UEkYqctS9amCl03jPuY0CMY8INjvCLOdUAJyPn8OW=w224-h225-s-no"} />
        <Card.Body>
          <Card.Title>Devi Construction</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaVF5okUM78jww-JINkyy0Ui7farqRm4ZlQPXEQ08KC26ei7L_zPDTxPzhpAEMit4jPjwchTxMxYf7bMoJb-zacwxldaQaSZTnA3YlRcEb43HHIITbYlCvACtwAY1c4QehYZ8ABrcumt1LzHudpbA7S9=w168-h299-s-no"} />
        <Card.Body>
          <Card.Title>Pulak shops</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaWfQgc52a07df7_0J6GLjBLxRCoet43cBviMXkcEeMOR3JK_ry0rUW3OsUiybfRq-rEoc1a_08lqyf7M2ejmw1w0x4BUM5PHSCFf7b2NXLo6SxXx3fyH8fcr0SEC0hQxe-MiVT2Z8Ii25pGCHTxfrm9=w893-h893-s-no"} />
        <Card.Body>
          <Card.Title>Waterproof System</Card.Title>
        </Card.Body>
      </Card>
      <Card className="construction-card" /*onClick={handleClick}*/>
        <Card.Img variant="top" src={"https://lh3.googleusercontent.com/pw/AJFCJaX3FTYxFfYmd4UTPTOUeaizTMrk-mKpa3l3nOmm2xQrHnXuz_Lpu_RFETt2CuyJQgL-h8_Lo8NUZBdj4Gkk3W6_aKN0q6bejkxTAJIoA8sGRLr5QbEckQgdbZeqapUuKB78akM_6AY__M--dmrE-OLy=w542-h714-s-no"} />
        <Card.Body>
          <Card.Title>Modular System</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ConstructionCard;
