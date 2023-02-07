import { Form, Navigate, NavLink, useNavigate } from "react-router-dom";
import { Dropdown, Navbar, NavDropdown, Nav, Button, Collapse, Container, FormControl } from 'react-bootstrap';
import '../styles/style.css';
import '../styles/bootstrap.css';
import React from 'react';


function Navigation() {
    const navigate = useNavigate();

    let logged = localStorage.getItem("isAuthenticated");
    let userDetails = JSON.parse(localStorage.getItem("userDetails") || '{}');
    console.log(userDetails);

    function logout() {
        localStorage.clear();
        navigate("/");
    }

    const renderLogin = () => {
        if (logged) {
            return <Dropdown.Menu>
                <NavDropdown.Item onClick={logout}>Se déconnecter</NavDropdown.Item>
            </Dropdown.Menu>
        } else {
            return <Dropdown.Menu>
                <NavDropdown.Item href="./connexion">Se connecter</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="./inscription">S'inscrire</NavDropdown.Item>
            </Dropdown.Menu>
        }
    }

    return (


        <Navbar className="bg-nouveau" expand="lg">
            <Container fluid>
                <Navbar.Brand href="./"><img className="logo-nav" src="./images/logos/GroupLogo.svg" alt="logo" height="32" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Bons plans" id="basic-nav-dropdown" className="navig">
                            <NavDropdown.Item href="./restaurants">Restaurants</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="./lifestyle">
                                Life Style
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="./culture-aides"> Culture / Aides</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="./evenements" className="navig">Événements</Nav.Link>
                        <Nav.Link href="./apropos" className="navig">À propos</Nav.Link>
                        <Nav.Link href="./contact" className="navig">Contactez-nous</Nav.Link>
                    </Nav>
                    <Nav>
                        <div className="connexion">

                            {
                                userDetails?.prenom ? "Bonjour " + userDetails.prenom : ""
                            }
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor"
                                className="bi bi-person-circle navig" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>

                            <NavDropdown title="" id="basic-nav-dropdown" className="nav-end navig">
                                {
                                    renderLogin()
                                }
                            </NavDropdown>

                            <div className="search">
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Bientôt en service"
                                        aria-label="Search" />
                                    <button className="btn btn-outline-success search-button" type="submit">Recherche</button>
                                </form>
                            </div>

                        </div>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}
export default Navigation;
