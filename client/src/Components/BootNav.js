import React from 'react'
import { Nav, Navbar, Container } from "react-bootstrap";


const Navibar = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MERN</Navbar.Brand>
                    <Nav className="mx-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/add">Add</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Navibar