import React, { useEffect, useState } from 'react';
import './Header.css';
import './DarkMood.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../asstes/logo/logo.png';
import { FaMoon } from "react-icons/fa";
const Header = () => {

    const [theme, setTheme] = useState('light');
    const handleToggleTheme = () => {
        if(theme === 'light'){
            setTheme('dark');
        }
        else{
            setTheme('light');
        }
    };
    useEffect(() => {
        document.body.className = theme;
    },[theme])

    return (
        <div className={`Header ${theme}`}>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><img className='navbar d-inline-block align-top' src={logo} alt='' height={30} width={30} ></img> CodeScript</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Courses</Nav.Link>
                            <Nav.Link href="#pricing">FAQ</Nav.Link>
                            <Nav.Link href="#blog">Blog</Nav.Link>
                            <Nav.Link  onClick={handleToggleTheme}> <FaMoon></FaMoon> Darkmood</Nav.Link>
                            
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;