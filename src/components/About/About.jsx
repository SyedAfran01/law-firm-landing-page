import React, { useState } from 'react';
import CardComponent from '../Card/CardComponent.jsx'; 
import slidesData from '../utils/data';
import styles from './About.module.css'; 

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsPerPage = 3;

  const totalCards = slidesData.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === totalPages - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1));
  };

  const getVisibleCards = () => {
    const startIndex = activeIndex * cardsPerPage;
    return slidesData.slice(startIndex, startIndex + cardsPerPage);
  };

  return (
    <section className={styles['about']}>
      <h1>Our Happy Customers</h1>
      <div className={styles['carousel']}>
        <button className={styles['prev']} onClick={prevSlide}>&#10094;</button>
        <div className={styles['cards-container']}>
          {getVisibleCards().map((slide) => (
            <CardComponent
              key={slide.id}
              imageUrl={slide.icon}
              text={slide.text}
            />
          ))}
        </div>
        <button className={styles['next']} onClick={nextSlide}>&#10095;</button>
      </div>
    </section>
  );
};

export default AboutUs;
