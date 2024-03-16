import React from 'react';
import cartmed from '../images/cartmed.svg';
const TopBody=({})=>{
return(
  <div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>Empowering wellness through knowledge and care.</h1>
        <p>
          Get your lab reports customized.We provide you fastest services by
          giving advance researches on your reports and after analyzing it
          thoroughly provide you its simplified version.
        </p>
      </div>
      <div className="hero-img">
        <img alt="" src={cartmed} />
      </div>
    </div>
  </div>
)
};
export default TopBody;