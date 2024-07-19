import React from 'react';
import ImageComponent from '../images/ImageComponent'; // Adjust path as per your project structure
import styles from './PracticeArea.module.css'; // Import CSS module for styling

const PracticeArea = () => {
  const images = [
    { imageUrl: 'image1.svg', imageName: 'Business Law' },
    { imageUrl: 'image2.svg', imageName: 'Partnership Law' },
    { imageUrl: 'image3.svg', imageName: 'REAL ESTATE LAW' },
    { imageUrl: 'image4.svg', imageName: 'BUSINNESS LAW' },
    { imageUrl: 'image5.svg', imageName: 'LANDLORD DISPUTE' },
    { imageUrl: 'image6.svg', imageName: 'ELDER ABUSE' },
    // Add more images as needed
  ];

  return (
    <div className={styles['practice-area']}>
      <h2>Practice Area</h2>
      <div className={styles['image-grid']}>
        {images.map((image, index) => (
          <ImageComponent
            key={index}
            imageUrl={image.imageUrl}
            imageName={image.imageName}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeArea;
