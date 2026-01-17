import React from 'react';
import { personalInfo } from '../data/info';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <h1 className="hero-title">Hi, I'm <span className="highlight">{personalInfo.name}</span></h1>
                <h2 className="hero-subtitle">{personalInfo.role}</h2>
                <p className="hero-tagline">{personalInfo.tagline}</p>
                <div className="hero-btns">
                    <a href="#projects" className="btn btn-primary">View Projects</a>
                    <a href="#contact" className="btn">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
