import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #111;
        padding: .5rem 0.7rem;
    }

    .navbar-light .navbar-toggler {
        color: rgb(197, 197, 197);
        background-color: #606060;
        
    }

    .navbar-collapse {
        color: #eee;
    }

    .navbar-brand, .navbar-nav .nav-link{
        color: rgb(197, 197, 197);

        &:hover {
            color: white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="md">
            <Navbar.Brand className="logo-div-style" href="/"><h6 className="logo navbar-logo">LINDEN CREATIVE</h6></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="hamburger-custom"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)