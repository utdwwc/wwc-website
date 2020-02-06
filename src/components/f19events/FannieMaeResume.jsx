import React, { Component } from 'react'
import { Container, Row, Col, Image, Jumbotron, Card } from 'react-bootstrap';
import './FannieMaeResume.css';

export default class FannieMaeResume extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Fannie Mae Resume Review</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/fanniemae-flyer.jpg" circle className="flyer-image" />
			</Col>
			<Col>
			<Card className="fanniemae-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> September 10th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> ECSS 2.412
                        <br></br><br></br>
			Just a reminder that we are hosting a Women in Technology panel discussion by female engineers at Fannie Mae! Following the panel will be a resume review. With the intern fair right around the corner, this is a great opportunity to have your resume critiqued by workplace professionals. You don’t want to miss this fun and engaging event to network with Fannie Mae engineers and have your resume critiqued. Food will be provided. Make sure to bring your questions and resumes. </event-title></Card.Body>
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
