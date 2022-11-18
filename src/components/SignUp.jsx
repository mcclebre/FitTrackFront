import {React, useState} from 'react';
import {useNavigate} from 'react-router-dom'
import { SignUpUser } from '../api';


const SignUp = () => {
const navigate = useNavigate();
const [username,setUsername] = useState('')
const [password,setPassword] = useState('')
const [confirmPassword,setConfirmPassword] = useState('')

const handleInputChange = (e) => {
    const {id, value} = e.target

    if (id === "username"){
        setUsername(value)
    }

    if (id === "password"){
        setPassword(value)
    }

    if (id === "confirmPassword"){
        setConfirmPassword(value)
    }

}

const handleSubmit = async (event) => {
    event.preventDefault()
    console.log("User info:", username,password,confirmPassword)

    if (password === confirmPassword){
        const newUser = await SignUpUser(username,password)
        console.log("New User:", newUser)
        const token = newUser.token
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
        navigate("/Home")
    } else {
        alert("Passwords do not match!")
    }

}

    return (<div className='form'>
                <div className='form-body'>
                    <div className='username'>
                        <label className='form_label' htmlFor="username">Username</label>
                        <input className='form_input' type="text" value={username} onChange = {(e) => handleInputChange(e)} id="username" placeholder='Username'/>
                    </div>
                    <div className='password'>
                        <label className='form_label' htmlFor="password">Password</label>
                        <input className='form_input' type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder='Password'/>
                    </div>
                    <div className='confirmPassword'>
                        <label className='form_label' htmlFor="confirmPassword">Confirm Password</label>
                        <input className='form_input' type="password" value={confirmPassword} onChange = {(e) => handleInputChange(e)} id="confirmPassword" placeholder='Confirm Password'/>
                    </div>
                    <div className='submitButton'>
                        <button onClick={(event) => handleSubmit(event)} type='submit' className='btn'>Sign Up</button>
                    </div>
        </div>
    </div>)
}

export default SignUp;