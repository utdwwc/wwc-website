import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Carousel, Card, CardDeck } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div>	
			<Carousel>
			<Carousel.Item>
			<img className="carousel-image" src="assets/wwc-mcafee.jpg" alt="First Slide" />
			</Carousel.Item>
                        <Carousel.Item>
			<img className ="carousel-image" src="assets/wwc-cbre.jpg" alt="Second Slide" />
			</Carousel.Item>
			<Carousel.Item>
			<img className="carousel-image" src="assets/wwc-fm.jpg" alt="Third Slide" />
			</Carousel.Item>
			<Carousel.Item>
			<img className="carousel-image" src="assets/wwc-intuit.jpg" alt="Fourth Slide" />
			</Carousel.Item>
			<Carousel.Item>
			<img className="carousel-image" src="assets/wwc-sm.jpg" alt="Fifth Slide" />
			</Carousel.Item>
			</Carousel>
			<Jumbotron className="jumbotron-infobox">
			<h6>Who We Are</h6>
			<hr></hr>
			<h2>
			Women Who Compute is a community for women pursuing careers in engineering and computer science at The University of Texas at Dallas. We aim to provide opportunities for mentorship, personal and professional development, and social bonding with women of paralleled interests in computing.<br></br><br></br>
			Representing <strong>one of the largest women-advocating organizations on campus</strong>, Women Who Compute strives to:<br></br><br></br>
			<Row className="show-grid align-items-center">
			<Col>
			<Card className="goals-card">
			<Card.Body>
			<ol>Cultivate a <strong>community</strong> of female engineering and computer science students at the University of Texas at Dallas.</ol>
			</Card.Body>
			</Card>
			</Col>
			<Col>
			<Card className="goals-card">
			<Card.Body>
			<ol>Provide <strong>mentorship</strong> and <strong>support</strong> to women in computing.</ol>
			</Card.Body>
			</Card>
			</Col>
			<Col>
			<Card className="goals-card">
			<Card.Body>
			<ol>Provide personal and professional <strong>development</strong>.</ol>
			</Card.Body>
			</Card>
			</Col>
			<Col>
			<Card className="goals-card">
			<Card.Body>
			<ol><strong>Encourage women</strong> to pursue a career in the fields of engineering and computer science.</ol><br></br>
			</Card.Body>
			</Card>
			</Col>
			</Row>
	As an organization, Women Who Compute hopes to successfully seek the interest of its member base to provide them with proper support and encouragement to puruse the numerous opportunities available for them engineering and computer science.</h2>
			</Jumbotron>
			<h6>Recent Events</h6>
			<hr></hr>
			<Jumbotron className="jumbotron-flyerbox">
			<Row className="show-grid text-center">
			<Col xs={16} sm={4}>
			<Card className="flyer-card">
			<a href="/f19events/speed-mentoring" class="btn">
                        <Card.Img src="assets/speed-mentoring-flyer.jpg" className="flyer" />
                        <Card.Body>
                        <Card.Title><card-title>Speed Mentoring</card-title></Card.Title>
                        </Card.Body>
			</a>
                        </Card>
			</Col>
			<Col xs={16} sm={4}>
			<Card className="flyer-card">
			<a href="/f19events/intuit-coding-ws" class="btn">
                        <Card.Img src="assets/intuit-coding-ws-flyer.jpg" className="flyer" />
                        <Card.Body>
			<Card.Title><card-title>Intuit Coding Workshop</card-title></Card.Title>
			</Card.Body>
			</a>
			</Card>
			</Col>
                        <Col xs={16} sm={4}>
                        <Card className="flyer-card">
			<a href="/f19events/r-ladies-tech-talk" class="btn">
			<Card.Img src="assets/r-ladies-flyer.jpg" className="flyer" />
			<Card.Body>
			<Card.Title><card-title>R Ladies Tech Talk</card-title></Card.Title>
			</Card.Body>
			</a>
                        </Card>
			</Col>
			</Row>
			<a class="btn btn-default" href="/events">More</a>
			</Jumbotron>
			<h6>Sister Organizations</h6>
			<hr></hr>
			<Jumbotron className="jumbotron-sisterorgs">
			<h2>To reach out to as many members as possible, Women Who Compute has partnered with the following organizations to represent their national chapters at UT Dallas. 
			</h2>
			<Row>
			<Col xs={12} sm={6} className="person-wrapper">
			<Card className="logo-card">
			<a href="/wicys" class="btn">
			<Card.Img src="assets/wicys-logo.jpg" className="wicys-logo" />
			</a>
			</Card>
			</Col>
			<Col xs={12} sm={6} className="person-wrapper">
			<Card className="logo-card">
			<a href="/girls-who-code" class="btn">
			<Card.Img src="assets/girls-who-code-logo.jpg" className="gwc-logo" />
			</a>
			</Card>
			</Col>
			</Row>
			</Jumbotron>
			<div class="footer">
                        <div class="container text-center">
                        <Row>
                        <Col xs={12} sm={4} className="footer-wrapper">
                        <Image src="assets/our-logo.png" circle className="footer-logo" />
                        </Col>
			<Col xs={12} sm={4} className="footer-wrapper text-left">
			<h5><ft-head>About</ft-head></h5>
			<about-info> Women Who Compute is a community for women pursuing careers in engineering and computer science at The University of Texas at Dallas. We aim to provide opportunities for mentorship, personal and professional development, and social bonding with women of paralleled interests in computing.</about-info>
			</Col>
			<Col xs={12} sm={4} className="footer-wrapper text-left">
			<h5><ft-head>Quick Links</ft-head></h5>
			<ul class="list-unstyled">
			<li><a href="/"><quick-link>About</quick-link></a></li>
                        <li><a href="/events"><quick-link>Events</quick-link></a></li>
                        <li><a href="/officers"><quick-link>Team</quick-link></a></li>
                        <li><a href="/membership-faqs"><quick-link>Membership</quick-link></a></li>
	                <li><a href="/wicys"><quick-link>WiCyS</quick-link></a></li>
	                <li><a href="/girls-who-code"><quick-link>Girls Who Code</quick-link></a></li>
			</ul>
			</Col>
			</Row>
			<ul class="social-icons-footer">
                        <a href="https://facebook.com/groups/utdwwc/" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://instagram.com/utdwwc/" target="_blank" class="fa fa-instagram"></a>
			<a href="mailto:utdwwc@gmail.com" target="_blank" class="fa fa-envelope"></a>
                        </ul>
			</div>  
                        </div>
                        </div>
		)
	}
}
