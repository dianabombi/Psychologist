import React from 'react';
import NavBar from './navBar';

function About() {
  return (
  
    <div className="about-page">
    < NavBar />
      <p className="text-about">Welcome to [Psychologist's Name or Practice Name]
        Your journey to well-being starts here.

        Are you feeling overwhelmed, stuck, or simply in need of someone to talk to? At [Practice Name], we provide a safe and supportive space where you can explore your thoughts, feelings, and challenges without judgment. Together, we’ll work toward clarity, healing, and growth.</p>
    <img 
      src="BaraPsychologist.jpg" 
      alt="Psychologist" 
      style={{ width: '300px', height: 'auto' }}
      className="image-psychologist"
      />

   </div>
  )
}

export default About;
