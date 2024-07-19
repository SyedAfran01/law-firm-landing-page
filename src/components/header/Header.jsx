import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/logo.svg" alt="XIGSTUDIO Logo" className={styles.logo} />
        <div className={styles.logoText}>IGSTUDIO</div>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/attorney">Attorney</Link>
        <Link to="/practice-area">Practice Area</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/contact" className={styles.contactLink}>Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
