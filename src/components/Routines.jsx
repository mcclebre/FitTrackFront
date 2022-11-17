import React, { useEffect, useState } from "react";
import { getRoutines } from "../api";

const Routines = (props) => {
    
    const [routines, setAllRoutines] = useState([]);
    // const user = localStorage.getItem(token)
    const publicRoutines = routines.isPublic 
    console.log(publicRoutines, "public")

    useEffect(() => {
        async function fetchRoutines() {
            const allRoutines = await getRoutines();
            setAllRoutines(allRoutines);
            console.log(allRoutines,"all")
            
        }
        fetchRoutines();
    }, []);

     
    console.log(routines)
    return (
    <div> 
         <div className="routinesContainer">

            {routines.isPublic}

            
            {routines.isPublic ? (
                filterRoutines().map((routine) => {
                    return ( 
                    <div >{routine.name}</div>
                    );
                })
            ) : (
                <div>
                    Log in to see private routines...
                </div>
            )}

        </div>
    </div>
    );
};

export default Routines;