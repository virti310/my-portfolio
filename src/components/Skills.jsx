import React from 'react';
import { personalInfo } from '../data/info';
import '../styles/Skills.css';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2>Skills</h2>

                <div className="skills-grid">
                    {/* Frontend */}
                    <div className="skill-category">
                        <div className="skill-header">
                            <FaCode className="skill-icon" />
                            <h3>Frontend</h3>
                        </div>
                        <div className="skill-list">
                            {personalInfo.skills.frontend.map((skill, index) => (
                                <span key={index} className="skill-chip">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* Backend */}
                    <div className="skill-category">
                        <div className="skill-header">
                            <FaServer className="skill-icon" />
                            <h3>Backend</h3>
                        </div>
                        <div className="skill-list">
                            {personalInfo.skills.backend.map((skill, index) => (
                                <span key={index} className="skill-chip">{skill}</span>
                            ))}
                        </div>
                    </div>

                    {/* General/Soft Skills */}
                    <div className="skill-category">
                        <div className="skill-header">
                            <FaTools className="skill-icon" />
                            <h3>Soft Skills</h3>
                        </div>
                        <div className="skill-list">
                            {personalInfo.skills.soft.map((skill, index) => (
                                <span key={index} className="skill-chip">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
