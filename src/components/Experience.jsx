import React from 'react';
import { personalInfo } from '../data/info';
import '../styles/Experience.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="container">
                <h2>Experience & Education</h2>

                <div className="timeline">
                    <h3 className="timeline-title"><FaGraduationCap /> Education</h3>
                    <div className="timeline-items">
                        {personalInfo.education.map((edu, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>{edu.degree}</h4>
                                    <span className="timeline-date">{edu.year}</span>
                                    <p>{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
