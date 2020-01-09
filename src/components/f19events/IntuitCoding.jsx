import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron } from 'react-bootstrap';
import './IntuitCoding.css';

export default class IntuitCoding extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Intuit Coding Workshop</h4>
                        </Jumbotron>
                        <Image src="/assets/intuit-coding-ws-flyer.jpg" circle className="flyer-image" />
			<p><event-info><strong>WHEN:</strong> November 6th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> TI Auditorium
                        <br></br><br></br>
			WWC, SWE, SHPE, and NSBE are partnering up with Intuit to host a live coding workshop! A group of Intuit Software Engineers will walk you through how to develop a full-stack Slack application. This is a great opportunity to have hands-on experience with software development, network with Intuit engineers for potential internship opportunities, as well as get to know other UTD organizations! Prior to coming to the event, please look at the flyers to complete the pre-work. Dinner will be provided.
			<br></br><br></br>
			Click <strong><a href="http://bit.ly/UTDcode" target="_blank">here</a></strong> to RSVP for the event!
			<br></br><br></br></event-info></p>
                        <a href="/events" class="btn btn-info">Our Events</a>
			</div>
                )
        }
}
