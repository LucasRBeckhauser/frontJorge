import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function Header() {
  const [headerClicked, setHeaderClicked] = useState(false);

  const handleIconClick = () => {
    setHeaderClicked(!headerClicked);
  };

  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/"></Navbar.Brand>
        <div className="d-lg-none" onClick={handleIconClick}>
          {headerClicked ? <IoClose /> : <RxHamburgerMenu />}
        </div>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <NavDropdown title="RH" id="nav-dropdown-dark-example" menuVariant="dark">
              <NavDropdown.Item as={NavLink} to="colaboradores">Colaboradores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="admissao">Admissão</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="demissao">Demissão</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}