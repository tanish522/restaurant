import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <Navbar
            bg="white"
            style={{ width: "100vw" }}
            className="overflow-auto "
        >
            <div className="d-flex justify-content-center">
                {/* <Navbar.Brand as={Link} to="/">
                    Home Page
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-center">
                    <Nav>
                        <Nav.Link as={Link} to="/">
                            <img
                                className=""
                                src="https://picsum.photos/id/237/180/180"
                            ></img>
                            <p className="fs-2">Home Page</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/italian">
                            <img
                                className=""
                                src="https://picsum.photos/id/238/180/180"
                            ></img>
                            <p className="fs-2">Italian</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/chinese">
                            <img
                                className=""
                                src="https://picsum.photos/id/239/180/180"
                            ></img>
                            <p className="fs-2">Chinese</p>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/punjabi">
                            <img
                                className=""
                                src="https://picsum.photos/id/240/180/180"
                            ></img>
                            <p className="fs-2">Punjabi</p>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}

export default Navigation;
