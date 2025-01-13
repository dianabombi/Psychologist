import React from 'react';
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  const clickNavigate = ()=> {
    navigate ('/bookings');
  }

  return (
  <div>
    < NavBar />
    <div className="about-page">
       <img 
        src="BaraPsychologist.jpg" 
        alt="Psychologist" 
        className="image-psychologist"
      />

    <div >
      <p className="text-about">I am Barbora, psychologist with 6 years of practice.
        Your journey to well-being starts here.

        Are you feeling overwhelmed, stuck, or simply in need of someone to talk to? At Safe Space Psychology, we provide supportive space where you can explore your thoughts, feelings, and challenges without judgment. Together, we’ll work toward clarity, healing, and growth.  
        You don't know where to start?
        <button className='contactMe-button' onClick={clickNavigate}>BOOK SESSION</button>    
      </p>
  </div>
</div>
</div>
  )
};

export default About;
