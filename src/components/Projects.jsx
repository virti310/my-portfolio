import React from 'react';
import { personalInfo } from '../data/info';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    {personalInfo.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repo">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
