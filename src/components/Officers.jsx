import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Nav, Card } from 'react-bootstrap';
import './Officers.css';

export default class Officers extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-officers">
		        <h5>Meet our team.</h5>
			</Jumbotron>
			<Container>
			<Row className="show-grid text-center">
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/shireen-bahadur.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Shireen<br></br>Bahadur</h3>
			<h4>President</h4>
			<ul class="social-icons">
                        <a href="https://linkedin.com/in/shireen-bahadur/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://facebook.com/shaween18" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://instagram.com/shaween18/" target="_blank" class="fa fa-instagram"></a>
                        </ul>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/nisha-rajesh.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Nisha<br></br>Rajesh</h3>
                        <h4>VP of External Affairs</h4>
                        <ul class="social-icons">
                        <a href="https://linkedin.com/in/nisha-rajesh-9081a2150/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://facebook.com/nisha.rajesh.1422" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://instagram.com/nisharajesh96/" target="_blank" class="fa fa-instagram"></a>
                        </ul>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/jenny-ward.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Jenny<br></br>Ward</h3>
                        <h4>VP of Internal Affairs</h4>
                        <ul class="social-icons">
                        <a href="https://linkedin.com/in/jennifer-ward/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://facebook.com/jenwa97" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://instagram.com/jennymaeward/" target="_blank" class="fa fa-instagram"></a>
                        </ul>
			</Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/nicole-hui.png" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Nicole<br></br>Hui</h3>
                        <h4>Treasurer</h4>
			<ul class="social-icons">
                        <a href="https://www.linkedin.com/in/nicole-hui/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://www.facebook.com/profile.php?id=100006862243263" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/nicole.hui/" target="_blank" class="fa fa-instagram"></a>
                        </ul>
			</Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/sam-sangraula.png" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Sam<br></br>Sangraula</h3>
                        <h4>Secretary</h4>
                        <ul class="social-icons">
                        <a href="https://www.linkedin.com/in/samsangraula/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://www.facebook.com/sam.sangraula" target="_blank" class="fa fa-facebook"></a>
                        <a href="https://www.instagram.com/samsangraula/" target="_blank" class="fa fa-instagram"></a>
                        </ul>
			</Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/smita-ghosh.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Smita<br></br>Ghosh</h3>
                        <h4>Marketing Chair</h4>
                        <ul class="social-icons">
                        <a href="https://linkedin.com/in/smita-ghosh/" target="_blank" class="fa fa-linkedin"></a>
                        <a href="https://facebook.com/profile.php?id=100009632922029" target="_blank" class="fa fa-facebook"></a>
                        </ul>
			</Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/nisha-chandra.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Nisha<br></br>Chandra</h3>
                        <h4>Event Planning Chair</h4>
                        <ul class="social-icons">
                        <a href="https://linkedin.com/in/nisha-c/" target="_blank" class="fa fa-linkedin"></a>
                        </ul>
			</Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			<Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/courtney-schaller.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Courtney<br></br>Schaller</h3>
                        <h4>Outreach Coordinator</h4>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
                        <Col xs={12} sm={4}>
                        <Card className="officer-card">
                        <Card.Img src="assets/karen-mazidi.jpg" className="profile-pic" />
                        <Card.Body>
                        <Card.Text>
                        <h3>Karen<br></br>Mazidi</h3>
                        <h4>Faculty Sponsor</h4>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </Col>
			</Row>
			</Container><br></br><br></br>
                        
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
