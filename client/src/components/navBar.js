import React from "react";
import MyButton from "../components/button";

function NavBar () {

return (
    <div className= "bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">LOGO</div>
      <div className="flex space-x-4">
        <MyButton text="Register" className = "border-solid	border-2"/>
        <MyButton text="Login"/>
    </div>
    </div>
    );
}

export default NavBar;