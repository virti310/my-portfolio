import React, { useState, useRef } from 'react';
import { personalInfo } from '../data/info';
import '../styles/Contact.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Replace these with your actual Service ID, Template ID, and Public Key from EmailJS
        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            alert("EmailJS keys are missing! Please check your .env file.");
            setStatus('');
            return;
        }

        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                alert(`Thank you, ${formData.name}! Your message has been sent.`);
                setFormData({ name: '', email: '', message: '' });
            }, (error) => {
                console.log(error.text);
                setStatus('error');
                alert("Failed to send the message. Please try again later.");
            });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Contact Me</h2>

                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <p>I am available for freelance work or full-time opportunities. Connect with me via email or phone.</p>

                        <div className="info-item">
                            <FaEnvelope className="info-icon" />
                            <span>{personalInfo.contacts.email}</span>
                        </div>

                        <div className="info-item">
                            <FaPhone className="info-icon" />
                            <span>{personalInfo.contacts.phone}</span>
                        </div>

                        <div className="info-item">
                            <FaMapMarkerAlt className="info-icon" />
                            <span>Gujarat, India</span>
                        </div>

                        <div className="social-links">
                            <a href={personalInfo.contacts.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <FaLinkedin className="social-icon" />
                            </a>
                            <a href={personalInfo.contacts.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <FaGithub className="social-icon" />
                            </a>
                            <a href={personalInfo.contacts.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="social-icon" />
                            </a>
                        </div>
                    </div>

                    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'} <FaPaperPlane />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
