import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Card, Carousel } from 'react-bootstrap';
import './Wicys.css';

export default class Wicys extends Component {
        render() {
                return (
                        <div>
			<Jumbotron className="jumbotron jumbotron-wicys1">
			<Image className="wicyslogo-img" src="assets/wicys-transp.png" />
			<h2><univ-sub>The University of Texas at Dallas</univ-sub></h2>
			</Jumbotron>
			<Jumbotron className="jumbotron-memberbox">
			<h6>Membership</h6>
			<hr></hr>
			<h2>
		Since UTD WiCyS is a national chapter, a membership fee is required to become an official member of this organization. However, anyone and everyone is welcome to take part in events hosted by WiCyS without official membership! By obtaining national membership, official WiCyS members recieve added benefits, including the ability to post resumes to the WiCyS Job Board, discounts on the WiCyS Conference attendance, engagement through Market Studies, and access to extensive networking resources, and membership to the WiCyS Affiliate Program.<br></br><br></br>
			<Carousel className="carousel carousel-fade">
                        <Carousel.Item>
                        <img className="carousel-wicys-image" src="assets/wicys-4.jpg" alt="First Slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className ="carousel-wicys-image" src="assets/wicys-3.jpg" alt="Second Slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-wicys-image" src="assets/wicys-6.jpg" alt="Third Slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-wicys-image" src="assets/wicys-1.jpg" alt="Fourth Slide" />
                        </Carousel.Item>
                        <Carousel.Item>
                        <img className="carousel-wicys-image" src="assets/wicys-5.jpg" alt="Fifth Slide" />
                        </Carousel.Item>
                        </Carousel>
			For more information on WiCyS membership click <a href="https://www.wicys.org/join" target="_blank"><strong><color-link>here</color-link></strong></a>!
			</h2>
			</Jumbotron>
			<Jumbotron className="jumbotron-conferencebox">
			<h6>WiCyS Conference</h6>
			<hr></hr>
			<h2>
			WiCyS hosts an annual conference in the spring to connect companies, students, and experienced leaders and professionals in the field of cybersecurity. It is a great opprunity for women in cybersecurity to network, share knowledge and expertise, and recieve mentorship.
			<Image className="wicysconference-img" src="assets/wicys-conference.png" /><br></br><br></br>
For more information on the WiCys 2020 Conference, click <a href="https://www.wicys.org/conference" target="_blank"><strong><color-link>here</color-link></strong></a>!
			</h2>
			</Jumbotron>
			<Jumbotron className="jumbotron-resourcebox">
			<h6>Resources</h6>
			<hr></hr>
			<h2>
			WiCyS provides an extensive collection of resources for learning and teaching cybersecurity! Additional resources such as cybersecurity readings, free online learning, cybersecurity certifications can be found directly on the official WiCyS website.
			</h2>
			<Card.Body>
			<Jumbotron className="jumbotron-box">
			<Row className="show-grid align-items-center">
			<Col xs={12} sm={5}>
			<a class="btn" href="https://www.wicys.org/" target="_blank">
			<Card className="resource-card">
			<Card.Body><h2>WiCyS Website</h2></Card.Body>
			</Card>
			</a>
			</Col>
			<Col xs={12} sm={5}>
			<a class="btn" href="https://teachcyber.tk/" target="_blank">
			<Card className="resource-card">
			<Card.Body><h2>TeachCyber</h2></Card.Body>
			</Card>
			</a>
			</Col>
			<Col xs={12} sm={5}>
			<a class="btn" href="https://www.hackthebox.eu/" target="_blank">
			<Card className="resource-card">
			<Card.Body><h2>Hack the Box</h2></Card.Body>
			</Card>
			</a>
			</Col>
			<Col xs={12} sm={5}>
			<a class="btn" href="https://ctftime.org/ctf-wtf/" target="_blank">
			<Card className="resource-card">
			<Card.Body><h2>Capture the Flag</h2></Card.Body>
			</Card>
			</a>
			</Col>
			</Row>
			</Jumbotron>
			</Card.Body>
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
