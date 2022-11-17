import React, { useState, useEffect} from "react";
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
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [currentUser,setCurrentUser] = useState(false)

  const getCurrentUser = async () => {
    if (isLoggedIn){
      const currentUserData = await currentUserInfo(isLoggedIn)
      setCurrentUser(currentUserData)
    }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('token')
    if (loggedInUser){
      setIsLoggedIn(loggedInUser)
      getCurrentUser()
    }
  },[isLoggedIn])  

  }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>}>
      <Route path="Home" element={<Home/>} />
      <Route path="Routines" element={<Routines/>} />
      <Route path="Activities" element={<Activities isLoggedIn={isLoggedIn}/>}/>
      <Route path="Login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="UserRoutines" element={<UserRoutines/>}/>
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
