import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';

export default function Navigation(){
  return <Navbar bg="light" expand="lg">
    <Container>
      <Link to={"/"}>
        <Navbar.Brand>YourAnimeList</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex" action='/' method="GET">
          <Form.Control
            type="search"
            placeholder="Search Anime"
            className="me-2"
            aria-label="Search"
            name="search"
          />
          <Button variant="outline-success" type="submit">Search</Button>
        </Form>
        <Nav className="ms-auto">
          <Link to={"/favorites"}>Favorites</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}