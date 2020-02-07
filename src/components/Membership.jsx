import React, { Component } from 'react'
import { Jumbotron, Container, Col, Image, Row, Card } from 'react-bootstrap';
import './Membership.css';

export default class Membership extends Component {
        render() {
                return (
                        <div>
			<Jumbotron className="jumbotron jumbotron-membership">
			<h5>FAQs</h5><br></br>
			</Jumbotron>
			<Card className="faq-card">
			<Card.Body>
                        <question>How do I become a member of Women Who Compute?</question><br></br><br></br>
			<answer>Attend our events! There is no formal membership process, so we encourage memberhsip by active particpation in our events.</answer><br></br><br></br>
                        </Card.Body>
			</Card>
			<Card className="faq-card">
			<Card.Body>
			<question>I am not a woman- am I still eligible to become a member of Women Who Compute?</question><br></br><br></br>
			<answer>Absolutely!</answer><br></br><br></br>
			</Card.Body>
			</Card>
			<Card className="faq-card">
			<Card.Body>
			<question>Do I have to pay an annual membership fee?</question><br></br><br></br>
                        <answer>Since Women Who Compute is not a national chapter, members do not have to pay any form of membership fee to be a member.</answer><br></br><br></br>
			</Card.Body>
			</Card>
			<Card className="faq-card">
			<Card.Body>
			<question>Do I have to attend every WWC event to be a member?</question><br></br><br></br>
                        <answer>Absolutely not! The WWC team works to host events that cover a diverse range of topics, so feel free to attend the ones that most align with your interests.</answer><br></br><br></br>
			</Card.Body>
			</Card>
			<Card className="faq-card">
			<Card.Body>
			<question>How do I stay updated with WWC events?</question><br></br><br></br>
			<answer>To stay updated with Women Who Compute, you can join our mailing list and/or follow us on social media! We constantly provide updates on these platforms to keep members in the loop of upcoming events.</answer>
                        </Card.Body>
			<br></br><br></br><br></br>
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
