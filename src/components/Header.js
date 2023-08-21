import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <div>
            <Navbar className="bg-primary">
                <Container>
                    <Navbar.Brand className="pb-2">
                        <a href="/">
                        <i class="fa-brands fa-suse me-3 fa-2x" style={{color: "#ffffff"}}></i>
                        </a>
                    <span className="text-white">EMS Application</span></Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header