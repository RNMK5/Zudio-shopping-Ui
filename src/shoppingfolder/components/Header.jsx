import React from 'react';

const Header = () => {
  return (
    <div className='headerSection'>
        <div className="left">
        <span className="logo">zudio</span>
        </div>
      <div className="center">
        <ul className="navLinks">
          <li>Women</li>
          <li>Men</li>
          <li>Kids</li>
          <li>Beauty</li>
        </ul>
        <div className="searchBar">
          <input type="text" placeholder="What are you looking for?" />
        </div>
      </div>
      <div className="right">
        <ul className="navActions">
          <li>Sign Up / Sign In</li>
          <li><i className="heartIcon"></i></li>
          <li><i className="cartIcon"></i></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
