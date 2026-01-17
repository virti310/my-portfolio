import React from 'react';
import { personalInfo } from '../data/info';
import '../styles/About.css';
import { FaUserGraduate } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="container about-container">
                <div className="about-content">
                    <div className="section-header">
                        <h2><FaUserGraduate className="icon-header" /> About Me</h2>
                    </div>
                    <p className="about-text">{personalInfo.about}</p>

                    <div className="about-info">
                        {/* Additional quick info can go here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
