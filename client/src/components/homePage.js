import React from 'react';
import NavBar from './navBar';

function HomePage() {

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
            src="./flowers.jpg"
            className='flowers-image'
            />
       </div>
       </div>
  )
};

export default HomePage;
