import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button, Card, Form, InputGroup  } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends Component {
	render() {
		return (
			<div>
                        <Jumbotron className="jumbotron jumbotron-contact">
                        <h5>Contact Us</h5><br></br>
                        </Jumbotron>
			<Card className="form-card">
			<Card.Title><h6><form-title>Join our mailing list!</form-title></h6></Card.Title>
			<Form>
			<Card className="form-content-card">
                        <Form.Label><h2><form-subtitle>First Name</form-subtitle></h2></Form.Label>
                        <Form.Control type="first-name" placeholder="Enter first name" />
			<br></br><br></br>
			<Form.Label><h2><form-subtitle>Last Name</form-subtitle></h2></Form.Label>
			<Form.Control type="last-name" placeholder="Enter last name" />
			<br></br><br></br>
			<Form.Label><h2><form-subtitle>Email</form-subtitle></h2></Form.Label>
			<Form.Control type="email" placeholder="Enter email address" />
		        <br></br><br></br>
			<Form.Label><h2><form-subtitle>Education Level</form-subtitle></h2></Form.Label>
			<Form.Check name='radios' label=<radio-text>Freshman</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Sophomore</radio-text> type='radio' />
			<Form.Check name='radios' label=<radio-text>Junior</radio-text> type='radio' />
			<Form.Check name='radios' label=<radio-text>Senior</radio-text> type='radio' />
			<Form.Check name='radios' label=<radio-text>Masters</radio-text> type='radio' />
			<Form.Check name='radios' label=<radio-text>PhD</radio-text> type='radio' />
			<br></br><br></br>
			<Form.Label><h2><form-subtitle>Major</form-subtitle></h2></Form.Label>
                        <Form.Check name='radios' label=<radio-text>Computer Science</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Computer Engineering</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Software Engineering</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Elecrical Engineering</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Mechanical Engineering</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Biomedical Engineering</radio-text> type='radio' />
			<Form.Check name='radios' label=<radio-text>Data Science</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Information Technology and Systems</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>ATEC</radio-text> type='radio' />
                        <Form.Check name='radios' label=<radio-text>Other</radio-text> type='radio' />
			</Card>
			</Form>
			</Card>
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
