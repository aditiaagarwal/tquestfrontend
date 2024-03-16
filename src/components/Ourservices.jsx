import React from 'react';
import Ourstory from './Ourstory';
import FourTasks from './FourTasks';
import './Ourservices.css';
const Ourservices=({})=>{
  return(
    <section id="our-services">
        <FourTasks/>
        <Ourstory/>
        <span className="service-btn">
          Contact Us For Need Any Help And Services{" "}
          <a href="#">Let's get Started</a>
        </span>
      </section>
  );
};
export default Ourservices;