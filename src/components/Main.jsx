import React from "react";
import Navbar from "./Navbar"
import { Footer,Home,SignUp } from "./";

<Navbar />
<Home/>
<Footer/>

const Main = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={}
  )
)




  return ( 
  <div id="main">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default Main;
