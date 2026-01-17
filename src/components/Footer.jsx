import React from 'react';
import '../styles/Footer.css';
import { personalInfo } from '../data/info';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                <div className="footer-links">
                    {/* Social links could be repeated here */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
