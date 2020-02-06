import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron, Row, Card } from 'react-bootstrap';
import './SpringKickoff.css';

export default class SpringKickoff extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Spring Semester Kickoff</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/spring-kickoff.jpg" circle className="flyer-img" />
			</Col>
			<Col>
			<Card className="skickoff-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> January 29th, 2020
			<br></br><br></br>
			<strong>WHERE:</strong> The Blackstone Launchpad
                        <br></br><br></br>
			Come meet the WWC officer team, learn about our upcoming events this semester, our new sister organizations, and have fun socializing with your fellow WWC members at our annual spring semester kickoff event! Food will be provided. We look forward to meeting everyone there!</event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
