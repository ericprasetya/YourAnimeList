import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Navigation(){
  return <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">YourAnimeList</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Anime"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <Nav className="ms-auto">
          <Nav.Link href="#home">Favorites</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}