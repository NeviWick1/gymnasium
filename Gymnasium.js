import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';


function  Gymnasium(){ 
  const hrStyle = {
    border: "3px solid #000", 
    margin: "10px 0", 
    color: 'black'
  };
  return(
    <div>
    <div>
      <Container fluid>
        <Row noGutters style={{ backgroundColor: '#EFC958', padding: '15px' }}>
        </Row>
      </Container>
    </div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Col md={2}>
          <Navbar.Brand href="/Home">Faculty of Science</Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <NavDropdown title="Sport council" id="basic-nav-dropdown">
              <Container>
                <Row>
                  <Col md={1}>
                    <h5> Sport council</h5>
                    <NavDropdown.Item href="/">Sport</NavDropdown.Item>
                    <NavDropdown.Item href="/">Request sport Items</NavDropdown.Item>
                    <NavDropdown.Item href="/">Ground Booking</NavDropdown.Item>
                    <NavDropdown.Item href="/">Complain</NavDropdown.Item>
                    <NavDropdown.Item href="/">Support</NavDropdown.Item>
                    
                  </Col>

                </Row>
              </Container>
            </NavDropdown>
            <Col md={1}>
              <Nav.Link href="#">Contact</Nav.Link>
            </Col>
            <Col md={3}>
              <h1 style={{ color: 'dark' }}>,,.......................................,,,,,,,,,,,,,....................................................</h1>

            </Col>

            <Col md={3}>
              <Form inline className="ml-auto">
                <Form.Control type="text" placeholder="Search" className=" mr-sm-2" />
              </Form>
            </Col>
            <Col md={1}>
              <Button variant="primary">Search</Button>
            </Col>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br/>
    <Container className='mt-4 md-4' >
    <h1 className="text-center">University of Gymnasium</h1>
    <br/>
    <h4 className="text-center">Faculty of Science</h4>
  </Container>

  <div className="d-flex justify-content-center align-items-center" style={{ height: '80vh' }}>
  
  <Carousel data-bs-theme="dark" style={{ width: '60%', maxWidth: '600px' }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="src\Images\Slider1.jpg"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=eee"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=e5e5e5"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  
  
  <br/>

  <div>
  <Container>
  <Row>
    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Notice Board</Card.Title>
        <Card.Text>
        Special notices about the Clearnce
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
   

    <Col md={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Downloard the report
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
   

    <Col md={4}> 
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Quick Link</Card.Title>
        <Card.Text>
         Online Payment
        </Card.Text>
       </Card.Body>
    </Card>
    </Col>
    </Row>
    <br/>
    <br/>
    <br/>
    </Container>
  </div>
  <hr  style={hrStyle}  />

  <div>
    
<Container>
  <Row>
    <Col md={6}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>About us</Card.Title>
        <Card.Text>
        Naveen Balasooriya<br/>
        Sachni Dasa<br/>
        Newidu Wickrmasinha<br/>
        Chamidu Madushan
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>

    <Col md={6}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Faculty Map</Card.Title>
        <Card.Text>
        Add Image
        </Card.Text>
        </Card.Body>
    </Card>
    </Col>
  </Row>
</Container>


  </div>

 </div>
 



)
}
export default Gymnasium; 