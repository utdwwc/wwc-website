import React, { Component } from 'react'
import { Container, Col, Row, Image, Jumbotron, Card } from 'react-bootstrap';
import './CBREPanel.css';

export default class CBREPanel extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>CBRE Diversity Panel</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/cbre-flyer.jpg" circle className="flyer-image" />
			</Col>
			<Col>
			<Card className="cbre-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> September 17th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> SSA 14.265
                        <br></br><br></br>
			We are partnering with CBRE and NSBE for a very exciting diversity panel event! Come and learn about CBRE’s company, what technologies they use, and network with employees. Food will be provided.</event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
