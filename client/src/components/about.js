import React from 'react';
import NavBar from './navBar';

function About() {
  return (
  <div>
    <div className="about-page">
       <img 
        src="BaraPsychologist.jpg" 
        alt="Psychologist" 
        className="image-psychologist"
      />

      < NavBar />
<div className="container-text">
      <p className="text-about">I am Barbora, psychologist with 6 years of practice.
        Your journey to well-being starts here.

        Are you feeling overwhelmed, stuck, or simply in need of someone to talk to? At Safe Space Psychology, we provide supportive space where you can explore your thoughts, feelings, and challenges without judgment. Together, we’ll work toward clarity, healing, and growth.  
      </p>

        <button className='contactMe-button'>CONTACT ME</button>
        <button className='contactMe-button'>GIFT OTHERS</button>
  </div>
</div>
</div>
  )
};

export default About;
