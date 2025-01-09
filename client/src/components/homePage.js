import React from 'react';
import NavBar from './navBar';
import { useNavigate } from 'react-router-dom';

function HomePage() {

  const navigate = useNavigate();

  const clickNavigate = ()=> {
    navigate ('/bookings');
  }

  return (
     <div>
         <NavBar /> {/* Navbar visible on all pages */}
         <div className="homepage">
        
              <div className="landing-text">

                <h2>Welcome to Safe Space Psychology.</h2>
                 <br></br>
                <p>
                Life can be overwhelming, but you don’t have to face it alone. 
                <br></br>
                I offer a warm and empathetic environment where we can work collaboratively to understand your challenges and develop meaningful solutions.
                <br></br>
                My areas of expertise include like stress management, trauma recovery, or family therapy, parenthood and difficult life situations. I also offer self-confidence support, overcoming fears and self-growth support.
                <br></br>
                Let’s start this nourishing 🪴 journey towards mental wellness and emotional resilience—together.
                </p>
            </div>

            <img 
            src="./therapy session.jpg"
            className='flowers-image'
            />
        </div>

        <div className='second-text'>
        <img 
            src="./flowers.jpg"
            className='hands-image'
            />

          <div>
          <p>"A journey of a thousand miles begins with a single step."
          <br></br>
          <br></br>
          
          Let’s take that step together. Whether you’re seeking 
          guidance, healing, or simply a space to talk, 
          I’m here to support you. 
          </p>  
          <button className='book-session' onClick ={clickNavigate}>BOOK SESSION</button> 
          </div>  
        </div>


        <div className="third-block">
            <div className= "card" style={{ width: '18rem' }}>
              <img src="therapy.jpg" alt="Descriptive alt text" className="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Discover a safe, supportive space to explore your feelings and overcome life’s challenges. Together, we’ll work towards healing, growth, and lasting well-being.</p>
            </div>
        </div>
        
            <div className= "card" style={{ width: '18rem' }}>
              <img src="brain-colorful.avif" alt="Descriptive alt text" className="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Stress and Anxiety Management: Techniques to calm the mind and regain control.</p>
              </div>
          </ div>

          <div className= "card" style={{ width: '18rem' }}>
              <img src="computer.png" alt="Descriptive alt text" className="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Journaling in therapy offers a powerful tool for self-reflection and emotional clarity. By putting your thoughts and feelings into words, you can uncover patterns, process emotions, and track your growth on the journey to healing.</p>
              </div>
          </ div>

          <div className= "card" style={{ width: '18rem' }}>
              <img src="garden.png" alt="Descriptive alt text" className="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Setting boundaries is crucial for maintaining mental health and work-life balance. Nonprofit leaders and advocates should establish clear boundaries around their time, energy, and commitments to prevent overextension and burnout. This may involve learning to say no to additional responsibilities, delegating tasks to others, or setting aside designated time for rest and relaxation.</p>
              </div>
          </ div>

          <div className= "card" style={{ width: '18rem' }}>
              <img src="meditation.jpg" alt="Descriptive alt text" className="card-img-top" />
                <div class="card-body">
                  <p class="card-text">Meditation plays a vital role in psychology, promoting mental clarity, emotional regulation, and resilience. It reduces stress, enhances self-awareness, and fosters a deeper connection between mind and body, empowering individuals to navigate challenges with greater calm and focus.</p>
              </div>
          </ div>
      </div>
    </div>
  )
};

export default HomePage;
