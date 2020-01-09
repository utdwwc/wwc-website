import React, { Component } from 'react'
import { Container, Col, Image, Jumbotron } from 'react-bootstrap';
import './GHCPanel.css';

export default class GHCPanel extends Component {
        render() {
                return (
                        <div>
                        <Jumbotron className="jumbotron jumbotron-event">
                        <h4>Post-GHC Panel</h4>
                        </Jumbotron>
                        <Image src="/assets/ghc-flyer.jpg" circle className="flyer-image" />
			<p><event-info><strong>WHEN:</strong> October 10th, 2019
			<br></br><br></br>
			<strong>WHERE:</strong> TI Auditorium
                        <br></br><br></br>
			Curious about what the Grace Hopper Conference is about? Come out to our Post-GHC panel event! Our fantastic officer team will be hosting a panel to talk about the application process, preparation for the conference, and their GHC experience, and feel free to ask them any questions about it. Food will be provided.</event-info></p>
                        <a href="/events" class="btn btn-info">Our Events</a>
			</div>
                )
        }
}
