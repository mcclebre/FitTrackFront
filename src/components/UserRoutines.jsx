import React, {useState} from "react";
import { getRoutines, newRoutine } from "../api";
import { Link, useNavigate } from "react-router-dom";

const UserRoutines = (props) => {

    const [getRoutine, setGetRoutine] = useState([]);
    const [name, setNewName] = useState("");
    const [goal, setGoal] = useState("");

    const navigate = useNavigate();


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
    
        navigate("/UserRoutines");
      };




    return( <div className="MyRoutinesCreate">
        
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
                <legend>Would you like to post this Routine publicly?</legend>
                <div>
                    <input type="checkbox" id="public" name="public"/>
                    <label for="public">Public</label>
                </div>

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
    </div>)
}

export default UserRoutines;