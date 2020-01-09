import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron } from 'react-bootstrap';
import './RLadies.css';

export default class RLadies extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>R Ladies Tech Talk</h4>
                        </Jumbotron>
                        <Image src="/assets/r-ladies-flyer.jpg" circle className="flyer-image" />
			<p><event-info><strong>WHEN:</strong> October 29th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> CB3 1.312
                        <br></br><br></br>
			We will be hosting a tech talk with the R-Ladies, a worldwide community organization focused on supporting minority gender R enthusiasts to achieve their programming potential by engaging in networking and technical projects. The talk will cover topics such as the types of hard and soft skills successful data science consultants must possess, highlighting the top five soft suit skills that are important for data scientists to learn. The talk will be given by Kat Morgan, a data scientist consultant at Elicit who has had vast and accomplished experiences in data science. If you are interested in data science, programming in R, or general networking opportunities, make sure to stop by! More details about the event will be posted soon. Food will be provided.</event-info></p>
                        <a href="/events" class="btn btn-info">Our Events</a>
			</div>
                )
        }
}
