import React, { useEffect, useState } from "react";
import { getRoutines } from "../api";
import { Link } from "react-router-dom";

const Routines = (props) => {
    
    const [routines, setAllRoutines] = useState([]);
    const [newRoutine, setNewRoutine] = useState([]);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    

    useEffect(() => {
        async function fetchRoutines() {
            const allRoutines = await getRoutines();
            setAllRoutines(allRoutines);
            console.log(allRoutines,"all")
            
        }
        fetchRoutines();
    }, []);

    const handleInputChange = (input) => {
        const {id, value} = input.target;

        if(name === id){
        setName(value);
        } 
        
        if(goal === id){
        setGoal(value);
        }
    }

     
    
    return (
    <div> 
         <div className="routinesContainer">

            
        
            {routines.goal}
          {routines.activities} 

            
            {routines.length ? (
                routines.map((routine) => {
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
                            <button id="detailButton">See Activities
                            </button>    
                        </Link>
                        
                    </div>
                    );
                })
            ) : (
                <div>
                    Take some time to eat a donut...
                </div>
            )}

        </div>
    </div>
    );
};

export default Routines;