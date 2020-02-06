import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';
import './GWC.css';

export default class GWC extends Component {
        render() {
                return (
                        <div>
			<Jumbotron className="jumbotron jumbotron-gwc">
			<Image className="gwclogo-img" src="assets/gwc-transp.png" />
                        <h2><univ-sub>The University of Texas at Dallas</univ-sub></h2>
			</Jumbotron>
			<Jumbotron className="jumbotron jumbotron-gwcabout">
			<h6><wicys-heading>About Us</wicys-heading></h6>
			<hr></hr>
			<h2>
			Girls Who Code is an international non-profit organization working to close the gender gap in technology and lead the movement to <strong>inspire</strong>, <strong>educate</strong> and <strong>equip</strong> young women with the computing skills needed to pursue 21<sup>st</sup> century opportunities. Since launching in the United States in 2012, Girls Who Code has reached 185,000 girls through its programs (clubs, campuses, summer immersion programs, College Loops) and over 100 million people through campaigns, advocacy work, and New York Times best-selling series!
			</h2>
			</Jumbotron>
			<Jumbotron className="jumbotron jumbotron-gwccollegeloops">
			<h6><wicys-heading>College Loops</wicys-heading></h6>
			<hr></hr>
			<h2>
			College Loops are on-campus organizations that serve as the main point of contact for Girls Who Code. They offer monthly challenges focusing on cultivating computer science skills and engaging women to take action, collaborate, and innovate. Women Who Compute became the official College Loop for UT Dallas in 2019, and is currently working on integrating more events for members to network within the Girls Who Code community! 
			</h2>
			</Jumbotron>
			<Jumbotron className="jumbotron jumbotron-gwcmembership">
			<h6><wicys-heading>Membership</wicys-heading></h6>
			<hr></hr>
			<h2>
			Since there is no official membership process to Girls Who Code, anyone who is female or identifies as non-binary may participate in any activites and/or meetings hosted by Girls Who Code. The benefits ofattending events include the opportunity to navigate the HQ, a website for Girls Who Code members to recieve extensive resources to prepare them for a field in computing! To recieve access to HQ, refer to any Women Who Compute officer at a Girls Who Code meeting- they can help you create a HQ account and navigate through the resources that will help you prepare for a career in technology!
			</h2>
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
