import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron } from 'react-bootstrap';
import './McAfeeResume.css';

export default class McAfeeResume extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>McAfee Resume Workshop</h4>
                        </Jumbotron>
                        <Image src="/assets/mcafee-flyer.jpg" circle className="flyer-image" />
			<p><event-info><strong>WHEN:</strong> September 11th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> GR 2.530
                        <br></br><br></br>
			We will be hosting a resume workshop with McAfee! An engineering recruiter will be presenting on last-minute tips and tricks on cultivating a resume that enhance your technical skills and project experiences. This is a great opportunity to see what recruiters look for in a candidate, which is just in time before the intern fair! Food will be provided. Bring your questions and resumes to follow along and annotate them with notes from the workshop.</event-info></p>
                        <a href="/events" class="btn btn-info">Our Events</a>
			</div>
                )
        }
}
