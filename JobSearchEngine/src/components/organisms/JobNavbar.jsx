import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';


const JobNavbar = () => {
  const navigate = useNavigate();

    return(
    <Navbar expand="lg" className="bg-body-tertiary m-0 p-0 sticky-top">
      <Container fluid className='p-3 px-5 navbarColor'>
        <Navbar.Brand href="/" className='logo fs-2 navbarText'>FindYourJob</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className='fa-solid fa-bars'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={()=> navigate('/')} className='navbarText'>Home</Nav.Link>
            <Nav.Link onClick={()=> navigate('/favourites')} className='navbarText'>Favourites</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/unexisting/page/test" className='navbarText'>An unexisting page</NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='navbarText'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider className='navbarText'/>
              <NavDropdown.Item href="#action5" className='navbarText'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Form className="d-flex">
            <Button variant="outline-dark" className='logButton'>Log in</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default JobNavbar;
