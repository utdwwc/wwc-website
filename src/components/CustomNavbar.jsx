import React, { Component } from 'react'
import { Navbar, Nav, Image, NavDropdown } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
	render() {
		return (
<div>
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/"><Image src="assets/rsz_our-logo.png" className="logo" /></Navbar.Brand>
    <Nav>
      <Nav.Link href="/events"><nav-tab>EVENTS</nav-tab></Nav.Link>
      <Nav.Link href="/officers"><nav-tab>TEAM</nav-tab></Nav.Link>
      <Nav.Link href="/membership-faqs"><nav-tab>FAQs</nav-tab></Nav.Link>
      <NavDropdown title=<nav-tab>SISTER ORGANIZATIONS</nav-tab> id="nav-dropdown">
        <NavDropdown.Item href="/wicys"><nav-tab>WiCyS</nav-tab></NavDropdown.Item>
        <NavDropdown.Item href="/girls-who-code"><nav-tab>Girls Who Code</nav-tab></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/contact"><nav-tab>CONTACT</nav-tab></Nav.Link>
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

