import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchActivities, newActivity } from "../api";
import EditActivity from "./EditActivity";


const Activities = (props) =>{
    const navigate = useNavigate()
    const [getActivity, setGetActivity] = useState([])
    const [name, setName] = useState('')
    const [description,setDescription] = useState('')
    const [singleActivity,setSingleActivity] = useState('')


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchActivities();
      setGetActivity(data);
      console.log(data);
      return data;
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    if (id === "name") {
      setName(value);
    }

    if (id === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const makeNewActivity = await newActivity(name, description);

    if (makeNewActivity.name) {
      setGetActivity([...getActivity, makeNewActivity]);
    }

    navigate("/Activities");
  };

  return (
    <div className="activitiesPage">
      {props.isLoggedIn ? (
        <div className="NewActivity">
          <div className="NewActivityForm">
            <form className="submissionForm">
              <h2>Make a new Activity</h2>
              <label htmlFor="name">Name: </label>
              <input
                id="name"
                type="text"
                onChange={(e) => handleInputChange(e)}
                required
              />
              <label htmlFor="description">Description: </label>
              <input
                id="description"
                type="text"
                onChange={(e) => handleInputChange(e)}
                required
              />
            </form>

                <button className="createActivityBtn" onClick={(event) => handleSubmit(event)}>Create Activity</button>                      
           </div>
        </div>    
           : <></> }            
            <div className="ActivityDisplay">
                {getActivity.length ? getActivity.map((activity) => {
                    return(<div className="singleActivity" key={`activity-${activity.id}`}>
                            <h3>{activity.name}</h3>
                            <p><b>Description:</b> {activity.description}</p>
                            {props.isLoggedIn ?
                            <Link to={`/EditActivity/${activity.id}`}>Edit</Link> : <></>}
                        </div>)
                }): <div> Loading Activities...</div>}</div>
            </div>)
}


export default Activities;
