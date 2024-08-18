import React from 'react';
import styles from '../styles/Contact.module.css'; // Ensure this path is correct

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p className={styles.description}>
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>

      <div className={styles.contactForm}>
        <h2 className={styles.subtitle}>Send Us a Message</h2>
        <form
          action="https://formspree.io/f/your-form-id" // Replace with your Formspree or form handling URL
          method="POST"
        >
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input type="text" id="name" name="name" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" name="email" className={styles.input} required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea id="message" name="message" className={styles.textarea} rows="5" required></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>
      </div>

      <div className={styles.contactInfo}>
        <h2 className={styles.subtitle}>Contact Information</h2>
        <p className={styles.info}>Email: <a href="mailto:support@flashgenius.com" className={styles.link}>support@flashgenius.com</a></p>
        <p className={styles.info}>Phone: <a href="tel:+1234567890" className={styles.link}>+1 (234) 567-890</a></p>
        <p className={styles.info}>Address: 123 Learning Lane, Knowledge City, EDU 45678</p>
      </div>
    </div>
  );
};

export default Contact;
