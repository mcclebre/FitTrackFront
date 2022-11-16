import React from "react";
import Navbar from "./Navbar"
import { Footer,Home,SignUp } from "./";

const Main = () => {
  return <div id="main">
      <Navbar />
      <Home/>
      <SignUp />
      <Footer/>
    </div>
 
};

export default Main;
