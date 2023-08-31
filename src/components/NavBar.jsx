import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CardWidget } from "./CartWidget"
export const NavBar = () => (
    <Navbar bg="info" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home">Metal Zone</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/instrumentos">Instrumentos</Nav.Link>
            <Nav.Link href="/accesorios">Accesorios</Nav.Link>
          </Nav>
          <CardWidget/>
        </Container>
      </Navbar>
)