import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

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
  const [routineData, setRoutineData] = useState([]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
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
        <Route path="Activities" element={<Activities />}></Route>
        <Route path="Login" element={<Login />}></Route>
        <Route path="SignUp" element={<SignUp />}></Route>
        <Route path="UserRoutines" element={<UserRoutines />}></Route>
      </Route>
    )
  );

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
