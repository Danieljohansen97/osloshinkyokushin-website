import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./CustomNavbar.css";
type Props = {};

export default function CustomNavbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          Oslo Shinkyokushin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <CustomLink to="/news">Nyheter</CustomLink>
            </Nav.Item>
            <Nav.Item>
              <CustomLink to="/instructors">Instruktører</CustomLink>
            </Nav.Item>
            <NavDropdown title="Mer informasjon" id="collapsible-nav-dropdown">
              <CustomNavDropdownItem to="about">
                Hvem er vi
              </CustomNavDropdownItem>
              <CustomNavDropdownItem as={Link} to="/training">
                Trening hos oss
              </CustomNavDropdownItem>
              <CustomNavDropdownItem as={Link} to="/timetable">
                Treningstider i Oslo
              </CustomNavDropdownItem>
              <NavDropdown.Divider />
              <CustomNavDropdownItem as={Link} to="/shinkyokushinkai">
                Shinkyokushinkai
              </CustomNavDropdownItem>
              <CustomNavDropdownItem as={Link} to="/osu">
                Betydningen av OSU
              </CustomNavDropdownItem>
              <CustomNavDropdownItem as={Link} to="/etiquette">
                Dojo-etikette
              </CustomNavDropdownItem>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Logg inn
            </Nav.Link>
          </Nav>
          {/* Legg til status på innlogget bruker */}
          <Navbar.Text>Bruker</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <Nav.Link className={isActive ? "activelink" : ""} as={Link} to={to}>
      {children}
    </Nav.Link>
  );
}

function CustomNavDropdownItem({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <NavDropdown.Item className={isActive ? "activelink" : ""} as={Link} to={to}>
      {children}
    </NavDropdown.Item>
  );
}
