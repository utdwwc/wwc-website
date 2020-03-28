import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Carousel, Card } from 'react-bootstrap';
import './Events.css';

export default class Events extends Component {
	render() {
		return (
			<div>
			<h6><semester>Event Calendar</semester></h6>
                                <Container>
                                        <Row className="show-grid text-center">
                                                <iframe 
                                                        src="https://calendar.google.com/calendar/embed?src=utdwwc%40gmail.com&ctz=America%2FMexico_City" 
                                                        width="1500"
                                                        height="650"
                                                        frameborder="0"
                                                        scrolling="no"
                                                        align = "middle">
                                                </iframe>
                                        </Row>
                                </Container>
                        <h6><semester>Spring 2020</semester></h6><br></br>
                        <Container>
			<Row className="show-grid text-center">
			<Col xs={12} sm={4}>
			<Card className="event-card">
			<a href="/events" class="btn">
			<Card.Title><h3><event-title>JDA Tech Talk</event-title></h3></Card.Title>
			<Card.Img src="assets/jda-software-talk.jpg" className="event-flyer" />
			<Card.Body>
			<Card.Text>
			<event-date>February 12th, 2020</event-date><br></br>
			<event-date>TI Auditorium</event-date>
			</Card.Text>
			</Card.Body>
			</a>
			</Card>
			</Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/s20events/fannie-mae-spring-resume-review" class="btn">
                        <Card.Title><h3><event-title>Fannie Mae Panel</event-title></h3></Card.Title>
                        <Card.Img src="assets/fannie-mae-flyer-2.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>February 6th, 2020</event-date><br></br>
                        <event-date>TI Auditorium</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/s20events/spring-intern-fair-ws" class="btn">
                        <Card.Title><h3><event-title>Intern Fair WS</event-title></h3></Card.Title>
                        <Card.Img src="assets/intern-fair-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>February 5th, 2020</event-date><br></br>
                        <event-date>SLC 1.102</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
			</Col>
			<Col xs={12} sm={4}>
			<Card className="event-card">
                        <a href="/s20events/spring-semester-kickoff" class="btn">
                        <Card.Title><h3><event-title>Spring Kickoff</event-title></h3></Card.Title>
                        <Card.Img src="assets/spring-kickoff.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>January 29th, 2020</event-date><br></br>
                        <event-date>The Blackstone Launchpad</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			</Row>
			</Container>
			<h6><semester>Fall 2019</semester></h6><br></br>
			<Container>
                        <Row className="show-grid text-center">
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/speed-mentoring" class="btn">
		        <Card.Title><h3><event-title>Speed Mentoring</event-title></h3></Card.Title>
                        <Card.Img src="assets/speed-mentoring-flyer.jpg" className="event-flyer" />
			<Card.Body>
			<Card.Text>
			<event-date>November 13th, 2019</event-date><br></br>
			<event-date>The Blackstone Launchpad</event-date>
			</Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4} className="person-wrapper">
			<Card className="event-card">
                        <a href="f19events/intuit-coding-ws" class="btn">
			<Card.Title><h3><event-title>Intuit Coding WS</event-title></h3></Card.Title>
			<Card.Img src="assets/intuit-coding-ws-flyer.jpg" className="event-flyer" />
      			<Card.Body>
			<Card.Text>
			<event-date>November 6th, 2019</event-date><br></br>
			<event-date>TI Auditorium</event-date>
			</Card.Text>
			</Card.Body>
			</a>
			</Card>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/r-ladies-tech-talk" class="btn">
                        <Card.Title><h3><event-title>R Ladies Tech Talk</event-title></h3></Card.Title>
                        <Card.Img src="assets/r-ladies-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>October 29th, 2019</event-date><br></br>
                        <event-date>CB3 1.312</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/at&t-cybersecurity-panel" class="btn">
                        <Card.Title><h3><event-title>AT&T Cyber Panel</event-title></h3></Card.Title>
                        <Card.Img src="assets/at&t-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>October 21st, 2019</event-date><br></br>
                        <event-date>TI Auditorium</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/post-ghc-panel" class="btn">
                        <Card.Title><h3><event-title>Post-GHC Panel</event-title></h3></Card.Title>
                        <Card.Img src="assets/ghc-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>October 10th, 2019</event-date><br></br>
                        <event-date>TI Auditorium</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/cbre-diversity-panel" class="btn">
                        <Card.Title><h3><event-title>CBRE Diversity Panel</event-title></h3></Card.Title>
                        <Card.Img src="assets/cbre-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>September 17th, 2019</event-date><br></br>
                        <event-date>SSA 14.265</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card><br></br><br></br>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/mcafee-resume-workshop" class="btn">
                        <Card.Title><h3><event-title>McAfee Resume WS</event-title></h3></Card.Title>
                        <Card.Img src="assets/mcafee-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>September 11th, 2019</event-date><br></br>
                        <event-date>GR 2.530</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/fannie-mae-resume-review" class="btn">
                        <Card.Title><h3><event-title>Fannie Mae Panel</event-title></h3></Card.Title>
                        <Card.Img src="assets/fanniemae-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>September 10th, 2019</event-date><br></br>
                        <event-date>ECSS 2.412</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Card className="event-card">
                        <a href="/f19events/fall-semester-kickoff" class="btn">
                        <Card.Title><h3><event-title>Fall Kickoff</event-title></h3></Card.Title>
                        <Card.Img src="assets/kickoff-event-flyer.jpg" className="event-flyer" />
                        <Card.Body>
                        <Card.Text>
                        <event-date>September 5th, 2019</event-date><br></br>
                        <event-date>FO 3.616</event-date>
                        </Card.Text>
                        </Card.Body>
                        </a>
                        </Card>
                        </Col>
			</Row>
                        </Container><br></br><br></br><br></br><br></br><br></br><br></br>
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

