import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Image, Jumbotron, Button, Card } from 'react-bootstrap';
import './SpeedMentoring.css';

export default class SpeedMentoring extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Speed Mentoring</h4>
                        </Jumbotron>
			<Row>
			<Col>
                        <Image src="/assets/speed-mentoring-flyer.jpg" circle className="flyer-img" />
			</Col>
			<Col>
			<Card className="event-info-card">
			<Card.Body><event-title><strong>WHEN:</strong> November 13th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> The Blackstone Launchpad</event-title>
                        <br></br><br></br>
			<event-title>
			Speed Mentoring is a great networking experience to help you connect with female representatives from companies in the DFW area like Capital One, CoreLogic, USAA, Intuit, and many more. By having one-on-one chats with various company engineers/recruiters, you will be able to learn a bit more about their work and possibly discuss job opportunities! <strong>Bring your resumes.</strong> Dinner will be provided and <strong>we strongly recommend business casual attire</strong>.</event-title></Card.Body>
			{/*<a href="/events" class="btn btn-info">Back to Events</a>*/}
			</Card>
			</Col>
			</Row>
			</div>
                )
        }
}
