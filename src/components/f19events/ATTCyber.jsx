import React, { Component } from 'react'
import { Container, Row, Col, Image, Jumbotron, Card } from 'react-bootstrap';
import './ATTCyber.css';

export default class ATTCyber extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>AT&T Cybersecurity Panel</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/at&t-flyer.jpg" circle className="flyer-img" />
			</Col>
			<Col>
			<Card className="event-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> October 21st, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> TI Auditorium
                        <br></br><br></br>
			WWC will be teaming up with UTD Women in Cybersecurity (WiCys) and the Cybersecurity Club at UTD to host a Cybersecurity panel with AT&T! This event is a great opportunity to learn more about cybersecurity in a corporate setting and interact with engineers at AT&T. Please bring resumes and any questions you have for the panelists. Food will be provided.</event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
