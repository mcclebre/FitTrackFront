import React from "react";
import Navbar from "./Navbar"

import { 
  Footer,
  Home,
  Routines,
  Activities,
  Login,
  SignUp,
  UserRoutines } from "./";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";




const Main = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="Home" element={<Home/>}></Route>
      <Route path="Routines" element={<Routines/>}></Route>
      <Route path="Activities" element={<Activities/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="SignUp" element={<SignUp/>}></Route>
      <Route path="UserRoutines" element={<UserRoutines/>}></Route>
    </Route>
  )
);




  return ( 
  <div id="main">
      <RouterProvider router={router}></RouterProvider>
      <Footer/> 
   </div>
    
    
  );
};

export default Main;
