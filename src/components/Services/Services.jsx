import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        <div className={styles.serviceItem}>Service 1</div>
        <div className={styles.serviceItem}>Service 2</div>
        <div className={styles.serviceItem}>Service 3</div>
      </div>
    </section>
  );
};

export default Services;
