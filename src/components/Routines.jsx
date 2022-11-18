import React, { useEffect, useState } from "react";
import { getRoutines, newRoutine } from "../api";
import { Link, useNavigate } from "react-router-dom";

const Routines = (props) => {
    
    const [routines, setAllRoutines] = useState([]);
    const [getRoutine, setGetRoutine] = useState([]);
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const navigate = useNavigate();
    

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

    const handleSubmit = async (input) => {
        input.preventDefault();

        const makeNewRoutine = await newRoutine(name, goal);

        if(makeNewRoutine.name){
            setGetRoutine([...getRoutine, makeNewRoutine])
        }

        navigate('/Routines')
    }

     
    
    return ( <div className="routinesPage">
    {props.isLoggedIn ? 
     <div className="newRoutine">
        <div className="newRoutineForm">
        <form className="submissionForm">
            <h4>Make a new Routine</h4>
            <label htmlFor="name">Name: </label>
            <input id="name" type='text' onChange = {(input) => handleInputChange(input)} required />
            <label htmlFor="goal">Goal: </label>
            <input id="goal" type='text'  onChange = {(input) => handleInputChange(input)} required />
        </form>
            <button className="createRoutineButton" onClick={(event) => handleSubmit(event)}>Create Routine</button>                      
       </div>
    </div>    
       : <></> }  
        

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
   </div> );
};

export default Routines;