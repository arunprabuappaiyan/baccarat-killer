import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/CasinoKiller-final-logo.png';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Layout = () => {
  return (
    <>
      <nav className="d-flex justify-content-center align-items-center navbar border-bottom bg-white">
        <header className="logo-header">
          <img src={logo} alt="Casino Killer Logo" className="logo-icon" />
        </header>
        <h1 className="text-black text-center m-0 fw-bolder">
          Baccarat Prediction App with One Day Free Trail
        </h1>
      </nav>
      <Navbar expand="lg" className="bg-body-tertiary border-bottom" expanded>
        <Container>
          <Navbar.Collapse id="basic-navbar-nav" className="ps-3">
            <Nav className="m-auto fw-bold h5">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/instructions">
                Instructions
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/privacy">
                Privacy Policy
              </Nav.Link>
              <Nav.Link as={Link} to="/terms">
                Terms & Conditions
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout;
