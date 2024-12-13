import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand href="#"><img src="src/assets2/logos/music.svg" alt="" /></Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#sign-in" className="text-light">
                Accedi
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
}

export default CustomNavbar