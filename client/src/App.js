import React from "react";
import NavBar from "./components/navBar";
import Blog from "./components/blog";
import HomePage from "./components/homePage";
import BookingSystem from "./components/bookingSystem";


function App() {
  return (
    <div className="App">

      <BookingSystem />
      {/* <NavBar />
      <HomePage />
      <Blog /> */}
    </div>
  );
}

export default App;
