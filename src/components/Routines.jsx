import React, { useEffect, useState } from "react";
import { getRoutines, newRoutine } from "../api";
import { Link, useNavigate } from "react-router-dom";

const Routines = (props) => {
  const [getRoutine, setGetRoutine] = useState([]);
  const [name, setNewName] = useState("");
  const [goal, setGoal] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchRoutines() {
      const allRoutines = await getRoutines();
      setGetRoutine(allRoutines);
      console.log(allRoutines, "all");
      return allRoutines;
    }
    fetchRoutines();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setNewName(value);
    }

    if (id === "goal") {
      setGoal(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const makeNewRoutine = await newRoutine(name, goal);

    if (makeNewRoutine.name) {
      setGetRoutine([...getRoutine, makeNewRoutine]);
    }

    navigate("/Routines");
  };

  return (
    <div className="routinesPage">
      {props.isLoggedIn ? (
        <div className="newRoutine">
          <div className="newRoutineForm">
            <form className="submissionForm">
              <h2>Make a new Routine</h2>
              <label htmlFor="newName">Name: </label>
              <input
                id="name"
                type="text"
                onChange={(e) => handleInputChange(e)}
                required
              />
              <label htmlFor="goal">Goal: </label>
              <input
                id="goal"
                type="text"
                onChange={(e) => handleInputChange(e)}
              />
            </form>
            <button
              className="createRoutineButton"
              onClick={(event) => handleSubmit(event)}
            >
              Create Routine
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>
        <div className="routinesContainer">
          {getRoutine.length ? (
            getRoutine.map((routine) => {
              return (
                <div key={`routine-${routine.id}`}>
                  <div id="allTitle">
                    <h3>{routine.name}</h3>
                  </div>
                  <div id="creatorName">
                    <>{routine.creatorName}</>
                  </div>
                  <div id="goals">{"Goal: " + routine.goal}</div>
                  <Link to={`/RoutineActivities/${routine.id}`}>
                    <button id="detailButton">See Activities</button>
                  </Link>
                </div>
              );
            })
          ) : (
            <div>Take some time to eat a donut...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Routines;
