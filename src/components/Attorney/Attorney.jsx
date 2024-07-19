import React from 'react';
import SecondCardComponent from '../Card/SecondCardComponent'; 
import slidesData2 from '../utils/data2';
import styles from './Attorney.module.css';

const Attorney = () => {
  return (
    <div className={styles['attorney-page']}>
      <div className={styles['intro-section']}>
        <div className={styles['intro-left']}>
          <h1>Let's Introduce Yourself</h1>
        </div>
        <div className={styles['intro-right']}>
          <h2>Criminal Lawyer</h2>
          <p>
            We provide the highest quality legal representation for criminal cases. Our experienced team of attorneys will work tirelessly to ensure the best outcome for your case.
          </p>
        </div>
      </div>
      <div className={styles['cards-section']}>
        <h1>Why Choose Us?</h1>
        <div className={styles['cards-container']}>
          {slidesData2.slice(0, 3).map((slide) => (
            <SecondCardComponent
              key={slide.id}
              imageUrl={slide.icon}
              title={slide.title} 
              bodyText={slide.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Attorney;
