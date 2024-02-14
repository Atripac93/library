import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
  return (
    <nav>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">La tua lista dei Libiri</Navbar.Brand>
        </Container>
      </Navbar>
    </nav>
  );
};
export default Navigation;
