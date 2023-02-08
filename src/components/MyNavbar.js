import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function MyNavbar() {
    let login = false;
    return (
        <Navbar>
            <Container >
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src="https://st3.depositphotos.com/4270667/14411/v/450/depositphotos_144112265-stock-illustration-typographic-doctor-logo-design-medical.jpg"
                        width="280"
                        height="150"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {(login == true) ? <Nav.Link href="/profile">Espace privée</Nav.Link>
                            : <Nav.Link href="/">Connexion</Nav.Link>}
                        {(login == true) ? <Nav.Link href="/rdv" disabled>Prise de rendez vous</Nav.Link>
                            : <Nav.Link href="/rdv">Prise de rendez vous</Nav.Link>}
                        <NavDropdown title="Annuaire" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/labo">Laboratoires</NavDropdown.Item>
                            <NavDropdown.Item href="/doctor">
                                Medecins
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/Pharma">Pharmacies</NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default MyNavbar;