import React, { Component } from 'react'
import { Container, Row, Col, Image, Jumbotron, Card } from 'react-bootstrap';
import './FannieMaeResumeSpring.css';

export default class FannieMaeResumeSpring extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Fannie Mae Resume Review</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/fannie-mae-flyer-2.jpg" circle className="flyer-image" />
			</Col>
			<Col>
			<Card className="fanniemaespring-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> Februrary 6th, 2020
			<br></br><br></br>
			<strong>WHERE:</strong> TI Auditorium
                        <br></br><br></br>
			With the intern fair right around the corner, this is a great opportunity to have your resume critiqued by workplace professionals. You don’t want to miss this fun and engaging event to network with Fannie Mae engineers and have your resume critiqued! Food will be provided. Make sure to bring your questions and resumes. </event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
