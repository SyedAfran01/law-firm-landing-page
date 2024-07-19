// ImageComponent.jsx

import React from 'react';
import styles from './ImageComponent.module.css'; // Adjust path as per your project structure

const ImageComponent = ({ imageUrl, imageName }) => {
  return (
    <div className={styles['image-container']}>
      <div className={styles['image-wrapper']}>
        <img src={imageUrl} alt={imageName} className={styles['image']} />
        <div className={styles['image-overlay']}>
          <span className={styles['image-name']}>{imageName}</span>
        </div>
      </div>
    </div>
  );
};

export default ImageComponent;
