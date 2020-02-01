import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {menuFlag: 'Y'};
    }

  render() {
      return(
        <div> 
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
        );
  }
}

export default Menu;
