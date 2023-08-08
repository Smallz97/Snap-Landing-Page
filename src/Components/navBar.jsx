import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../Assets/images/logo.svg';
import Calendar from '../Assets/images/icon-calendar.svg';
import Reminder from '../Assets/images/icon-reminders.svg';
import Planner from '../Assets/images/icon-planning.svg';
import Todo from '../Assets/images/icon-todo.svg';

import NavDropdown from 'react-bootstrap/NavDropdown';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="90"
            height="35"
            className="d-inline-block align-center"
            alt="Snap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
              Snap
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='me-auto flex-grow-1 pe-3'>
              <NavDropdown
                title="Features"
                id="offcanvasNavbarDropdown-expand-one"
              >
                <NavDropdown.Item href="#features1"><img src={Todo} alt='calendar icon' /> Todo List</NavDropdown.Item>
                <NavDropdown.Item href="#features2"><img src={Calendar} alt='calendar icon' /> Calendar</NavDropdown.Item>
                <NavDropdown.Item href="#features3"><img src={Reminder} alt='calendar icon' /> Reminders</NavDropdown.Item>
                <NavDropdown.Item href="#features4"><img src={Planner} alt='calendar icon' /> Planning</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Company"
                id="offcanvasNavbarDropdown-expand-two"
              >
                <NavDropdown.Item href="#company1">History</NavDropdown.Item>
                <NavDropdown.Item href="#company2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#company3">Blog</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#careers" id="offcanvasNavbar-link-three">Careers</Nav.Link>
              <Nav.Link href="#about" id="offcanvasNavbar-link-four">About</Nav.Link>
            </Nav>
            <Nav className='justify-content-end'>
              <Nav.Link href="#login" id="right-nav-link">Login</Nav.Link>
              <Nav.Link href="#register" id="right-nav-link">Register</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;