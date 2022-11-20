import React, {useState} from "react";
import { editActivity } from "../api";
import { useParams } from "react-router-dom";

const EditActivity = (props) => {
    //const singleActivity = props.singleActivity
    const [name, setName] = useState('')
    const [description,setDescription] = useState('')
    const {activityId} = useParams()
    console.log(activityId)

    const handleInputChange = (e) => {
        const {id,value} = e.target

        if (id === "name"){
        setName(value)
        }

        if (id === "description"){
            setDescription(value)   
        }  
        
    }

    const handleEdit = async (e) => {
        e.preventDefault()

        const editedActivity = await editActivity(activityId,name,description)
        
        return editedActivity

    }
   
    return (<div>
            <form onSubmit={handleEdit}>
            <h3>Edit Activity</h3>
			<label htmlFor="name">New Name</label>
			<input id="name" type="text" onChange = {(e) => handleInputChange(e)} required />
            <label htmlFor="description">New description</label>
			<input id="description" type="text" onChange = {(e) => handleInputChange(e)}/>

			<button className="submitButton" type="submit"> Submit </button>

            </form>
    </div>)

}


export default EditActivity