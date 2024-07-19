import React from 'react';
import styles from './CardComponent.module.css'; 

const CardComponent = ({ imageUrl, text }) => {
  return (
    <div className={styles['card-container']}>
      <img src={imageUrl} alt="Person" className={styles['card-image']} />
      <div className={styles['card-description']}>
        {text}
      </div>
    </div>
  );
};

export default CardComponent;
