// import logo from "./logo.svg";
import "./App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function App() {
  return (
      <div>
  <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">EseTech Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Link to="/experience">Experience</Link>
            <NavDropdown title="Project" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">View Projects</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Add Projects
              </NavDropdown.Item> 
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Media
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
    <Col xs={6} md={4}>
    <Image mt={5} src=" https://via.placeholder.com/171x180" roundedCircle />
  </Col>
  <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>First Name </Form.Label>
        <Form.Control type="email" placeholder="John " />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="email" placeholder="Doe" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group><br />
      <Form.Control size="sm" type="text" placeholder="Social link" /><br />
      <Form.Control size="sm" type="text" placeholder="Website link" />
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Bio </Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>


      <Button variant="success">Submit</Button>{' '}
    </Form>
  </Container>
  </div>
  );
}

export default App;
