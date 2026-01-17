import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="logo">
                    <a href="#home" onClick={closeMenu}>VM.</a>
                </div>

                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" className="nav-link" onClick={closeMenu}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a>
                    </li>
                    <li className="nav-item">
                        <a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
                    </li>
                    <li className="nav-item">
                        <ThemeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
