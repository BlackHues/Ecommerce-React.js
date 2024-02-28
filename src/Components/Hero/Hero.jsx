// Importing necessary dependencies and assets
import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';

// Functional component for the Hero section
const Hero = () => {
  return (
    // Main container with a class name 'hero'
    <div className='hero'>
      {/* Left section of the hero */}
      <div className="hero-left">
        {/* Title for the hero section */}
        <h2>NEW ARRIVALS ONLY</h2>

        {/* Description and hand icon section */}
        <div>
          <div className='hand-hand-icon'>
            {/* "new" label with a hand icon */}
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>

          {/* Additional text for collections */}
          <p>collections</p>
          <p>for everyone</p>
        </div>

        {/* Button for the latest collection with an arrow icon */}
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      {/* Right section of the hero with an image */}
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

// Exporting the Hero component as the default export
export default Hero;
