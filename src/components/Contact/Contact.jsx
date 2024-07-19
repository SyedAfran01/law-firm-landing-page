// src/components/Contact/Contact.jsx

import React from 'react';
import styles from './Contact.module.css'; // Custom styles if needed

const Contact = () => {
  return (
    <section id="contact" className={`container my-5 ${styles.contact}`}>
      <h2 className="text-center mb-4 text-light">Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form className={`border p-4 rounded shadow ${styles.contactForm}`}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label text-light">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label text-light">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
