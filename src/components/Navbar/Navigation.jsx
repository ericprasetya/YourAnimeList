import { Navbar } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import styled from '@emotion/styled';

export default function Navigation(){
  const StyledButton = styled(Button)`
    font-size: 16px;
    padding : 4px;
    height : fit-content;
  `
  return <Navbar bg="light" expand="lg">
    <Container>
      <Link to={"/"}>
        <Navbar.Brand className="fw-bold text-primary">YourAnimeList</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form className="d-flex align-items-center" action='/' method="GET">
          <Form.Control
            type="search"
            placeholder="Search Anime"
            className="my-2 me-2"
            aria-label="Search"
            name="search"
            style={{ height: "36px" }}
          />
          <StyledButton variant="outline-success" type="submit">Search</StyledButton>
        </Form>
        <Nav className="d-flex justify-content-center align-items-center">
          <Link to={"/favorites"} className="btn btn-danger text-center w-75">
            Favorites
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}