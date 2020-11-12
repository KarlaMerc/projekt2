import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default class Header extends React.Component {
    render(){

return ( 
    
    <div>
      <Navbar expand="lg" variant="light" bg="light">
            <Navbar.Brand >Vehicle Make and Models</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
            </Nav>           
      </Navbar>
    </div>
    )
    }
}

