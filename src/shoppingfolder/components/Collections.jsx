import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Collections = (props) => {
  const { title, image1, image2, image3, image4,  price1, price2, price3, price4} = props.gentsFashion;

  const items = [
    { image: image1, label: "Polo T-shirts", price: price1 },
    { image: image2, label: "Formals", price: price2 },
    { image: image3, label: "Pack T's", price: price3 },
    { image: image4, label: "Men's", price: price4 },
  ];

  return (
    <div className="collectionsContainer">
      <h2>{title}</h2>
      <div className="imageGrid">
        {items.map((item, index) => (
          <div key={index} className="collectionItem">
            <img src={item.image} alt={item.label} className="collectionImage" />
            <div className="overlay">
              <div className="price">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
