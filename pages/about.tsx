// src/pages/about.tsx
import React from 'react';
import styles from '../styles/About.module.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        At FlashGenius, our mission is to revolutionize the way people learn and master new concepts through innovative flashcard tools. Founded with a passion for education and technology, we are dedicated to providing a cutting-edge platform that enhances the learning experience for students, professionals, and lifelong learners alike.
      </p>
      <h2 className={styles.subtitle}>Our Vision</h2>
      <p className={styles.text}>
        Our vision is to create a world where learning is engaging, efficient, and accessible to everyone. We believe that knowledge should be at your fingertips, and we strive to make learning a seamless and enjoyable journey. With our state-of-the-art flashcard system, powered by AI and designed with a futuristic interface, we aim to help you achieve your educational goals and excel in your studies or professional development.
      </p>
      <h2 className={styles.subtitle}>What We Do</h2>
      <ul className={styles.list}>
        <li>Customizable Flashcards: Create, customize, and organize your flashcards to fit your unique learning style.</li>
        <li>AI-Generated Content: Leverage the power of AI to generate and refine flashcards, ensuring you get relevant and up-to-date information.</li>
        <li>Interactive Features: Enjoy interactive and engaging learning experiences with our dynamic and visually appealing interface.</li>
        <li>Premium Content: Access exclusive flashcards and advanced features through our premium membership, designed to give you deeper insights and a more comprehensive learning experience.</li>
      </ul>
      <h2 className={styles.subtitle}>Our Story</h2>
      <p className={styles.text}>
        Founded by a team of passionate educators and tech enthusiasts, FlashGenius started with a simple idea: to make learning more effective and enjoyable. We recognized the potential of combining AI technology with traditional study methods to create a tool that not only aids in memorization but also enhances understanding. Over time, our vision evolved into a full-fledged platform that caters to learners of all ages and backgrounds.
      </p>
      <h2 className={styles.subtitle}>Our Team</h2>
      <p className={styles.text}>
        Our team is a diverse group of professionals with expertise in education, technology, and design. We are committed to pushing the boundaries of what’s possible in the field of learning and continuously improving our platform based on user feedback and technological advancements.
      </p>
      <h2 className={styles.subtitle}>Join Us</h2>
      <p className={styles.text}>
        We invite you to join the FlashGenius community and experience the future of learning. Whether you’re a student looking to ace your exams, a professional aiming to enhance your skills, or someone who simply loves to learn, FlashGenius is here to support you every step of the way.
      </p>
    </div>
  );
};

export default About;
