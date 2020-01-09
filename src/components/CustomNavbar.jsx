import React, { Component } from 'react'
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
	render() {
		return (
<div>
  <Navbar bg="primary" variant="dark">
  <Image src="assets/wwc-logo-3.png" circle className="logo" />
    <Navbar.Brand href="/"><nav-h>Women Who Compute</nav-h>
    <br></br><nav-sh>The University of Texas at Dallas</nav-sh></Navbar.Brand>
    <Nav>
      <Nav.Link href="/events"><nav-tab>Events</nav-tab></Nav.Link>
      <Nav.Link href="/officers"><nav-tab>Team</nav-tab></Nav.Link>
      <Nav.Link href="/membership-faqs"><nav-tab>Membership FAQs</nav-tab></Nav.Link>
      <NavDropdown title=<nav-tab>Sister Organizations</nav-tab> id="nav-dropdown">
        <NavDropdown.Item href="/wicys"><nav-tab>WiCyS</nav-tab></NavDropdown.Item>
        <NavDropdown.Item href="/girls-who-code"><nav-tab>Girls Who Code</nav-tab></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav className="ml-auto">
      <a href="https://facebook.com/groups/utdwwc" target="_blank" class="fa fa-facebook-square"></a>
      <a href="https://instagram.com/utdwwc" target="_blank" class="fa fa-instagram"></a>
      <a href="mailto:utdwwc@gmail.com" target="_blank" class="fa fa-envelope"></a>
    </Nav>
  </Navbar>
</div>
		)
	}
}

