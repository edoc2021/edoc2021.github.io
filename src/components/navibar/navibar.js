import React from "react"
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import HoverDropdown from "./hoverdropdown"
import { Link } from "gatsby"

const Navibar = ({ sticky, location, title }) => {
  return (
    <div style={{ marginBottom: 100 }}>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"
              fixed={sticky ? "top" : ""}
              style={{
                position: sticky ? "fixed" : "absolute",
                width: "100%"

              }}>
        <Container>
          <Container fluid={true}>
            <Navbar.Brand as={Link} to="/">{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <HoverDropdown href="" title="Program" id="collasible-nav-dropdown-1">
                  <NavDropdown.Item as={Link} to="/keynote">Keynotes</NavDropdown.Item>
                  <NavDropdown.Item href="/accepted-papers">Accepted papers</NavDropdown.Item>
                </HoverDropdown>
                <HoverDropdown href="" title="Conference" id="collasible-nav-dropdown-2">
                  <NavDropdown.Item as={Link} to="/call-paper">Call for Papers</NavDropdown.Item>
                  <NavDropdown.Item href="/committees">Committees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.3">Important Dates</NavDropdown.Item>
                  <NavDropdown.Item href="#action/2.4">Previous EDOCs</NavDropdown.Item>
                </HoverDropdown>
                <HoverDropdown title="Workshops, Demos, Doctoral Consortium" id="collasible-nav-dropdown-3">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </HoverDropdown>
                <Nav.Link as={Link} to="/program">Registration</Nav.Link>
                {/*<Link to="/program">Registration</Link>*/}
                <Nav.Link href="#venue">Venue</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navibar
