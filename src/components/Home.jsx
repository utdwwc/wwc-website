import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Image, Button, Carousel, Card, CardDeck } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
	render() {
		return (
			<div>	
				<div class="overlay">
					<Card className="overlay-card">
						<Card.Title><h6>
						<main-title>
							<mark className="fuck">WOMEN WHO COMPUTE</mark>
						</main-title>
					</h6><br></br>
					<h3>
						<sub-title>
							<mark className="fuck">The University of Texas at Dallas</mark>
						</sub-title>
					</h3>
					</Card.Title>
					</Card>
				</div>
				<Jumbotron className="jumbotron-home">
				</Jumbotron>
					<div id="who-we-are" className="info-div">
					<a href="who-we-are"></a>
						<Jumbotron className="jumbotron-infobox">
							<h6>ABOUT US</h6>
							<div className="description-div">
							<h2>
								We aim to provide mentorship, personal and professional development, and encouragement for women of paralleled interests in computing.
							</h2>
							</div>	
							<h2>
								<div className="pic-div">
								<Row className="show-grid align-items-center">
									<Col>
										<Card className="goals-card">
										<Card.Title>We're Supportive.</Card.Title>
										<Image className="goals-image" src="assets/wwc-members.jpg" />	
										</Card>
									</Col>
									<Col>
										<Card className="goals-card">
										<Card.Title>We're Professional.</Card.Title>
										<Image className="goals-image" src="assets/mentorship.jpg" />
										</Card>
									</Col>
									<Col>
										<Card className="goals-card">
										<Card.Title>We're Passionate.</Card.Title>
										<Image className="goals-image" src="assets/career-ops.jpg" />
										</Card>
									</Col>
								</Row>
								</div>
							</h2>
						</Jumbotron>
					</div>
					<div className="showcase-div">
						<Row className="showcase-row">
							<Col md={3} className="flex-item">
								<i class="fa fa-lightbulb-o"></i>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-card">
									<Card.Title><h2><bolded-text>SPEED MENTORING</bolded-text></h2></Card.Title>
								</Card>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-desc-card">
									<Card.Body><h2><showcase-item-description>Speed Mentoring is a great opportunity to network one-on-one with engineers and recruiters from companies in the Dallas area. Just bring a blazer, your resume, and the best elevator pitch you've got and learn what it takes to land internships and full-time positions at these outstanding companies.</showcase-item-description></h2></Card.Body>
								</Card>		
							</Col>
						</Row>
						<Row className="showcase-row">
							<Col md={3} className="flex-item">
								<i class="fa fa-code"></i>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-card">
									<Card.Title><h2><bolded-text>TECHNICAL WORKSHOPS</bolded-text></h2></Card.Title>
								</Card>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-desc-card">
									<Card.Body><h2><showcase-item-description>To help you feel more confident in your technical skills as an computer science or engineering student, we provide a variety of technical workshops. Hosted by company engineers and our very own officer team, we hope to build your knowledge on fundamental programming skills to be land internships and full-time opportunities.</showcase-item-description></h2></Card.Body>
								</Card>		
							</Col>
						</Row>
						<Row className="showcase-row">
							<Col md={3} className="flex-item">
								<i class="fa fa-briefcase"></i>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-card">
									<Card.Title><h2><bolded-text>CAREER TALKS</bolded-text></h2></Card.Title>
								</Card>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-desc-card">
									<Card.Body><h2><showcase-item-description>Are you curious about learning more about what engineers do in a corporate setting? We hosts career talks with various companies so you have the opportunity to learn about the nature of the work done and what skills are necessary to succesfully perform certain job functions.</showcase-item-description></h2></Card.Body>
								</Card>		
							</Col>
						</Row>
						<Row className="showcase-row">
							<Col md={3} className="flex-item">
								<i class="fa fa-cogs"></i>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-card">
									<Card.Title><h2><bolded-text>WEHack 2020</bolded-text></h2></Card.Title>
								</Card>
							</Col>
							<Col md={3} className="flex-item">
								<Card className="showcase-desc-card">
									<Card.Body><h2><showcase-item-description>WEHack is UTD's first women and non-binary focused hackathon aimed on highlghting and empowering students through technology. Not only does this hackathon help build technical skills, it encourages underrepresented communities to cultivate innovative solutions to challenging problems.</showcase-item-description></h2></Card.Body>
								</Card>		
							</Col>
						</Row>
						</div>
						<div className="sisterorg-div">
						<Jumbotron className="jumbotron-sisterorgs">
							<div className="description-div">
								<h2><bolded-text>
									Learn more about how we're working to expand the community of women engineers at UT Dallas.
								</bolded-text></h2>
							</div>
							<Container>
								<div class="item">
									<Image src="assets/wicys-3.png" className="wicys-logo" />
								</div>
								<div class="item">
									<Image src="assets/girls-who-code-logo.png" className="gwc-logo" />
								</div>	
								</Container>
						</Jumbotron>
					</div>
						<Jumbotron className="jumbotron-company">
						<h2><bolded-text>Thank you to these companies for supporting women in technology!</bolded-text></h2>
						<div className="company-div">
							<Container>
								<div class="item">
									<Image src="assets/company-logos/fannie-mae-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/cbre-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/jpmorgan-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/mcafee-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/att-logo.png" className="img" />
								</div>
							</Container>
							<Container>
								<div class="item">
									<Image src="assets/company-logos/usaa-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/celanese-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/state-farm-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/intuit-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/cisco-logo.png" className="img" />
								</div>
							</Container>
							<Container>
								<div class="item">
									<Image src="assets/company-logos/allstate-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/rladies-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/corelogic-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/blueyonder-logo.png" className="img" />
								</div>
								<div class="item">
									<Image src="assets/company-logos/american-airlines-logo.png" className="img" />
								</div>
							</Container>
						</div>
					</Jumbotron>
					<div className="contact-div">
						<Jumbotron className="jumbotron-contactus">
							<div className="description-div">
								<hr></hr>
								<h6><collab-title>Interested in collaborating?</collab-title></h6>
								<div className="workwithus-div">
									<h2>
									<bolded-text>We'd love to work with you.</bolded-text>
									</h2>
								</div>
								<div className="workwithus-div">
									<h2>Contact us today at utdwwc@gmail.com!</h2>
								</div>
							</div>
						</Jumbotron>
					</div>
				<div class="footer">
					<div class="container text-center">
						<Row>
							<Col xs={12} sm={4} className="footer-wrapper">
								<Image src="assets/our-logo.png" circle className="footer-logo" />
							</Col>
				
							<Col xs={12} sm={4} className="footer-wrapper text-left">
								<h5><ft-head>About</ft-head></h5>
								<about-info> 
									Women Who Compute is a community for women pursuing careers in engineering and computer science at The University of Texas at Dallas. We aim to provide opportunities for mentorship, personal and professional development, and social bonding with women of paralleled interests in computing.
								</about-info>
							</Col>

							<Col xs={12} sm={4} className="footer-wrapper text-left">
								<h5><ft-head>Quick Links</ft-head></h5>
								<ul class="list-unstyled">
									<li>
										<a href="/">
											<quick-link>About</quick-link>
										</a>
									</li>
									<li>
										<a href="/events">
											<quick-link>Events</quick-link>
										</a>
									</li>
									<li>
										<a href="/officers">
											<quick-link>Team</quick-link>
										</a>
									</li>
									<li>
										<a href="/membership-faqs">
											<quick-link>Membership</quick-link>
										</a>
									</li>
									<li>
										<a href="/wicys">
											<quick-link>WiCyS</quick-link>
										</a>
									</li>
									<li>
										<a href="/girls-who-code">
											<quick-link>Girls Who Code</quick-link>
										</a>
									</li>
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
