import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron, Row, Card } from 'react-bootstrap';
import './FallKickoff.css';

export default class FallKickoff extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Fall Semester Kickoff</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/kickoff-event-flyer.jpg" circle className="flyer-img" />
			</Col>
			<Col>
			<Card className="fkickoff-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> September 5th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> FO 3.616
                        <br></br><br></br>
			Come meet the WWC officer team, learn about our upcoming events this semester, and have fun socializing with your fellow WWC members at our annual fall semester kickoff event! Food will be provided. We look forward to meeting everyone there!</event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
