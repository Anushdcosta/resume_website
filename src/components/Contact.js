import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add form validation and send the data to a backend or email service
        alert('Form submitted');
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required />
                <button type="submit">Send</button>
            </form>
            <div className="social-links laptop">
                <a href="https://www.linkedin.com/in/anush-dcosta-7865b8291/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/Anushdcosta" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </section>
    );
}

export default Contact;
