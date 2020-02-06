import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Jumbotron, Button, Card } from 'react-bootstrap';
import './SpringInternFairWS.css';

export default class SpringInternFairWS extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Spring Intern Fair Workshop</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/intern-fair-flyer.jpg" circle className="flyer-img" />
			</Col>
			<Col>
			<Card className="internfair-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> January 5th, 2020
			<br></br><br></br>
			<strong>WHERE:</strong> SLC 1.102</event-title>
                        <br></br><br></br>
			<event-title>
			Come hear officers from WWC and ACM speak about navigating the intern fair, happening <strong>Friday, February 7th</strong>! Get tips on how to construct elevator pitches, what it takes to stand out to company representatives, and how to highlight points in your resume! This is an excellent opportunity to polish your technical and non-technical skills required to be successful at the intern fair. Food will be provided. </event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
