import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WomenCollection = (props) => {
  const { title, image1, image2, image3, image4, price1, price2, price3, price4} = props.ladiesFashion;

  const items = [
    { image: image1, price: price1 },
    { image: image2, price: price2 },
    { image: image3, price: price3 },
    { image: image4, price: price4 },
  ];

  return (
    <div className="womenCollectionContainer">
      <div className='box'>
        <img src="../assets/LadiesBanner.gif" alt="ladiesbanner" />
      </div>
      <h2>{title}</h2>
      <div className="imageGrid">
        {items.map((item, index) => (
          <div key={index} className="carouselItem">
            <img src={item.image} alt={`Fashion ${index + 1}`} className="carouselImage" />
            <div className="carouselOverlay">
              <div className="carouselText">{item.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenCollection;
