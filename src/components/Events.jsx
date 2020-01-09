import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Carousel } from 'react-bootstrap';
import './Events.css';

export default class Events extends Component {
	render() {
		return (
			<div>
			<h1>Fall 2019</h1><br></br>
			<Container>
                        <Row className="show-grid text-center">
                        <Col xs={12} sm={4} className="person-wrapper">
			<Image src="assets/speed-mentoring-flyer.jpg" circle className="event-flyer" />
			<h3><event-name>Speed Mentoring</event-name></h3>
			<Link to="/f19events/speed-mentoring">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/intuit-coding-ws-flyer.jpg" circle className="event-flyer" />
      			<h3><event-name>Intuit Coding Workshop</event-name></h3>
			<Link to="/f19events/intuit-coding-ws">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/r-ladies-flyer.jpg" circle className="event-flyer" />
                        <h3><event-name>R Ladies Tech Talk</event-name></h3>
			<Link to="/f19events/r-ladies-tech-talk">
                        <Button bsStyle="primary">Learn More</Button>
			</Link>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/at&t-flyer.jpg" circle className="event-flyer" />
                        <h3><event-name>AT&T Cybersecurity Panel</event-name></h3>
                        <Link to="/f19events/at&t-cybersecurity-panel">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
			</Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/ghc-flyer.jpg" circle className="event-flyer" />
                        <h3><event-name>Post-GHC <br></br> Panel</event-name></h3>
                        <Link to="/f19events/post-ghc-panel">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
			</Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/cbre-flyer.jpg" circle className="event-flyer" />
			<h3><event-name>CBRE Diversity <br></br> Panel</event-name></h3>
                        <Link to="/f19events/cbre-diversity-panel">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
			</Col>
			<Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/mcafee-flyer.jpg" circle className="event-flyer" />
			<h3><event-name>McAfee Resume Workshop</event-name></h3>
			<Link to="/f19events/mcafee-resume-workshop">
			<Button bsStyle="primary">Learn More</Button>
                        </Link>
			</Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/fanniemae-flyer.jpg" circle className="event-flyer" />
			<h3><event-name>Fannie Mae Resume Review</event-name></h3>
			<Link to="/f19events/fannie-mae-resume-review">
			<Button bsStyle="primary">Learn More</Button>
			</Link>
                        </Col>
                        <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/kickoff-event-flyer.jpg" circle className="event-flyer" />
			<h3><event-name>Fall Semester<br></br>Kickoff</event-name></h3>
			<Link to="/f19events/fall-semester-kickoff">
			<Button bsStyle="primary">Learn More</Button>
                        </Link>
			</Col>
			</Row>
                        </Container><br></br><br></br><br></br><br></br><br></br><br></br>
			<div class="footer">
                        <div class="container text-center">
                        <Row>
                        <Col xs={12} sm={4} className="footer-wrapper">
                        <Image src="assets/wwc-logo-3.png" circle className="footer-logo" />
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
                        <div class="footer-bottom text-center py-3">UTD Women Who Compute | Website by Nisha Rajesh</div>
                        </div>
			</div>
		)
	}
}

