import React, { useRef } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Card1.css";

function Card2() {
  return (
    <div className="card-container">
      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src="https://lh3.googleusercontent.com/5xEjTlmcu9-SJQ80ZsJLXD5SiHFp0PWQ_cbtEduzYZDvEf8sxloY4atqOB0teDFiwYKn7njiHsvOAk1aIP9wTr0ygvzNLTXd9vrleTLoQANpQRF6PeStF1a9t0S-UoynyuWyiWxmo2m_VhryHMP0F-4fDRIbAX76Iga_I3U-AcDi6y1Odurbw-FobPYj6axiUxYx9my2eN6zQKGPP1bsr9-R3Sery5ap_uMqIINcgD8DqyKXAdm3jDekNQDztKeJC3_qC6CIClwUHjnkBn9a9N18FJZeU9vp5jvpUT5gEnVsOMKGcvJNEjuTp5rErQFX0BOuy3ty1Nvyl65_O6QvmNUawNa2smWLPD7Lpky0ZC0i4-CDFQ8lvkeR0xB7j0ZmWelDj31u-Nv0Gcd6W6xfnR7dKRW2e8CfzvTtauymsXFVDzLotMoWZqbldw2P0u8JZ4xTYb5U09vOa4EblONIF9TjQVlXorSjSIUtRyvhpIwcL98VKmhAtHUylUBdkSB82dPpSvwfQ-OpAp7nT21HiIo1wsgSL9dAlto3N2EI31CTDZ8l0Rv3q1_QXGcVK6ACnmssybrVbjLk0MY7g7d4Wqh50jpDwByEId5CU44nvWSmk9rDaNjYCVX3m-ZLIwzuV3u91M1zGeEe2JaPBOI2FRnpbnnkn6xUdbadIEeKVOEWx3xVHx69X3IUp9KJi21_39U8dhBxlW13D1XcFr1_eZrPJH-0bB9lIfzyNpp3VU8i5OC9fP-vBVlOkmP-CXm-hfWOELsH2RW___6cQRVk1xdJLKDaGQ6vcs3Su9AeBTZypTWg2Pjyt7lZBRA3p2XNi4CZNWyt8F5KeDLx4efo6Uew3RfAW9snkkzrZNhW49sXO9OjAy_DCWZ6z8brwoYsnxuROvNmoBSlc0JMGm7SR83SgpINtZQyAdqMNXceqi9Yuf9mFFYjNgoCO1qEGcj5dgki29VxwD3_gq_mxiQlKi1YxBDHYgA_LPCA09NCt4Qi3DlHlui1Z5HiWg=w1080-h514-s-no?authuser=0" />
        <Card.Body>
          <Button variant="primary" className="recharge-button">Recharge Now</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '50rem' }}>
        <Card.Img variant="top" src="https://lh3.googleusercontent.com/5xEjTlmcu9-SJQ80ZsJLXD5SiHFp0PWQ_cbtEduzYZDvEf8sxloY4atqOB0teDFiwYKn7njiHsvOAk1aIP9wTr0ygvzNLTXd9vrleTLoQANpQRF6PeStF1a9t0S-UoynyuWyiWxmo2m_VhryHMP0F-4fDRIbAX76Iga_I3U-AcDi6y1Odurbw-FobPYj6axiUxYx9my2eN6zQKGPP1bsr9-R3Sery5ap_uMqIINcgD8DqyKXAdm3jDekNQDztKeJC3_qC6CIClwUHjnkBn9a9N18FJZeU9vp5jvpUT5gEnVsOMKGcvJNEjuTp5rErQFX0BOuy3ty1Nvyl65_O6QvmNUawNa2smWLPD7Lpky0ZC0i4-CDFQ8lvkeR0xB7j0ZmWelDj31u-Nv0Gcd6W6xfnR7dKRW2e8CfzvTtauymsXFVDzLotMoWZqbldw2P0u8JZ4xTYb5U09vOa4EblONIF9TjQVlXorSjSIUtRyvhpIwcL98VKmhAtHUylUBdkSB82dPpSvwfQ-OpAp7nT21HiIo1wsgSL9dAlto3N2EI31CTDZ8l0Rv3q1_QXGcVK6ACnmssybrVbjLk0MY7g7d4Wqh50jpDwByEId5CU44nvWSmk9rDaNjYCVX3m-ZLIwzuV3u91M1zGeEe2JaPBOI2FRnpbnnkn6xUdbadIEeKVOEWx3xVHx69X3IUp9KJi21_39U8dhBxlW13D1XcFr1_eZrPJH-0bB9lIfzyNpp3VU8i5OC9fP-vBVlOkmP-CXm-hfWOELsH2RW___6cQRVk1xdJLKDaGQ6vcs3Su9AeBTZypTWg2Pjyt7lZBRA3p2XNi4CZNWyt8F5KeDLx4efo6Uew3RfAW9snkkzrZNhW49sXO9OjAy_DCWZ6z8brwoYsnxuROvNmoBSlc0JMGm7SR83SgpINtZQyAdqMNXceqi9Yuf9mFFYjNgoCO1qEGcj5dgki29VxwD3_gq_mxiQlKi1YxBDHYgA_LPCA09NCt4Qi3DlHlui1Z5HiWg=w1080-h514-s-no?authuser=0" />
        <Card.Body>
          <Button variant="primary" className="recharge-button">Recharge Now</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Card2;
