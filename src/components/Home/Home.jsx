import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>You Don't have to figth them  Alone </h1>
        <p>Lorem Ipsum dolo sit amet consector adipsing  elit blandit, curcatic soldaesconubia ut inceptos faucibus himeaoys tortur eget, hac masssa gravida ardca interdium  prion  curuace</p>
        <form className={styles.emailForm}>
          <input type="email" placeholder="Enter your email" className={styles.emailInput} />
          <button type="submit" className={styles.sendButton}>Send</button>
        </form>

      </div>
      <div className={styles.imageContainer}>
        <img src="/hero-background.svg" alt="Hero Background" className={styles.heroImage} />
      </div>
    </section>
  );
};

export default Home;
