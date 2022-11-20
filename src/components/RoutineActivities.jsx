import React, { useEffect, useState } from "react";
import { getRoutines } from "../api";
import { useParams, Link, useNavigate } from "react-router-dom";

const RoutineActivities = (props) => {
  const { id } = useParams();
  console.log(id, "id");
  const [routineActivities, setRoutineActivities] = useState([]);

  // const routineData = getRoutines()
  // useEffect()
  console.log(props);
  const routine = props.routineData.filter((singleRoutine) => {
    return singleRoutine.id == id;
  })[0];
  console.log(routine, "routine");
  useEffect(() => {
    async function getSingleRoutine() {
      try {
        setRoutineActivities(routine);
      } catch (err) {
        console.err("Uh oh, spaghettios");
      }
    }
    getSingleRoutine();
  }, []);
  return (
    <>
      <div className="routineActivities">
        <Link to="/Routines">
          <button id="backButton">Go Back</button>
        </Link>
        {routine && routine.activities.length
          ? routine.activities.map((e) => {
              return (
                <div key={`routine-${e.id}`} id="routineDetails">
                  <div>
                    <h1 id="detailTitle">{e.name}</h1>
                  </div>
                  <div id="detailDescription">
                    {"Description: " + e.description}
                  </div>
                  <div id="detailDuration">{"Duration: " + e.duration}</div>
                  <div id="detailCount">{"Count: " + e.count}</div>
                </div>
              );
            })
          : null}
        {/* <div key={`routine-${routineActivities.id}`} id="routineDetails">
                <div>
                    <h1 id="detailTitle">{routineActivities.name}</h1>
                </div>
                <div id="creatorName">
                 {routineActivities.creatorName}
                </div>
                <div id="goals">
                {"Goal: " + routineActivities.goal}
                </div>
            </div> */}
      </div>
    </>
  );
};

export default RoutineActivities;
