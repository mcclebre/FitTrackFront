
import React, { useState, useEffect} from "react";
import Navbar from "./Navbar"


import {
  Footer,
  Home,
  Routines,
  RoutineActivities,
  Activities,
  Login,
  SignUp,
  UserRoutines,
} from "./";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const Main = () => {
  const loggedIn = window.localStorage.getItem("isLoggedIn")
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [currentUser,setCurrentUser] = useState(false)
  const [routineData, setRoutineData] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} isLoggedIn={isLoggedIn}/>}>
        <Route path="Home" element={<Home />}></Route>
        <Route
          path="Routines"
          element={
            <Routines
              setRoutineData={setRoutineData}
              routineData={routineData}
            />
          }
        ></Route>
        <Route
          path="RoutineActivities/:id"
          element={<RoutineActivities routineData={routineData} />}
        ></Route>
        <Route path="Activities" element={<Activities isLoggedIn={isLoggedIn}/>}/>
        <Route path="Login" element={<Login setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser}/>}/>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="UserRoutines" element={<UserRoutines />}></Route>
      </Route>
    )
  );

  

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

useEffect(() => {
    async function getRoutineData() {
      const response = await fetch(
        "https://fitnesstrac-kr.herokuapp.com/api/routines"
      );
      const result = await response.json();
      const routineData = result
      setRoutineData(routineData);
    }
    getRoutineData();
  }, []);

  return (
    <div id="main">
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </div>
  );
};

export default Main;
