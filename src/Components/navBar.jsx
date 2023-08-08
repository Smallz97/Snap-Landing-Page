import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto transparent">
            <NavDropdown title="Features" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#features/1.1"><img src={Todo} alt='calendar icon'/> Todo List</NavDropdown.Item>
              <NavDropdown.Item href="#features/1.2"><img src={Calendar} alt='calendar icon'/> Calendar</NavDropdown.Item>
              <NavDropdown.Item href="#features/1.3"><img src={Reminder} alt='calendar icon'/> Reminders</NavDropdown.Item>
              <NavDropdown.Item href="#features/1.4"><img src={Planner} alt='calendar icon'/> Planning</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Company" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#comapny/2.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#company/2.2">Our Team</NavDropdown.Item>
              <NavDropdown.Item href="#company/2.3">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#careers" id="nav-link">Careers</Nav.Link>
            <Nav.Link href="#about" id="nav-link">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#login" id="right-nav-link">Login</Nav.Link>
            <Nav.Link href="#register" id="right-nav-link">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;