import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact Us</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Name" required className={styles.inputField} />
        <input type="email" placeholder="Email" required className={styles.inputField} />
        <textarea placeholder="Message" required className={styles.textareaField}></textarea>
        <button type="submit" className={styles.submitButton}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
