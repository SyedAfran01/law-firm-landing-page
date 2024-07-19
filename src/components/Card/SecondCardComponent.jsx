import React from 'react';
import styles from './SecondCardComponent.module.css'; 

const SecondCardComponent = ({ imageUrl, title, bodyText }) => {
  return (
    <div className={styles['card-container']}>
      <div className={styles['icon-container']}>
        <img src={imageUrl} alt={title} className={styles['card-icon']} />
      </div>
      <h4 className={styles['card-title']}>{title}</h4>
      <div className={styles['card-body']}>
        <p>{bodyText}</p>
      </div>
      <button className={styles['read-more']}>Read More</button>
    </div>
  );
};

export default SecondCardComponent;
