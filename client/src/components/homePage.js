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
                Life can be overwhelming, but you don’t have to face it alone. I offer a warm and empathetic environment where we can work collaboratively to understand your challenges and develop meaningful solutions.

                My areas of expertise include [specific areas like stress management, trauma recovery, or family therapy]. I also offer [individual, couples, or group therapy] for those seeking support in a way that fits their unique needs. Let’s start the journey toward mental wellness and emotional resilience—together.
                </p>
            </div>
       </div>
       </div>
  )
}

export default HomePage;
