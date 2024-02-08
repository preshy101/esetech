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

function App() {
  return (
      <div>
  
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
