import React, {useState} from "react"
import { currentUserInfo, LoginUser } from "../api"
import { useNavigate } from "react-router-dom"


const Login = (props) => {
    const navigate = useNavigate()

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleInputChange = (e) => {
        const {id, value} = e.target

        if (id === "username"){
            setUsername(value)
        }

        if (id === "password"){
            setPassword(value)
        }
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        
        const loggedIn = await LoginUser(username,password)
        const token = await loggedIn.token
        localStorage.removeItem('token')
        localStorage.setItem('token',token)
        props.setIsLoggedIn(token)
        console.log(token)
    
        const currentUserData = await currentUserInfo(token)
        await props.setCurrentUser(currentUserData)

        navigate("/Home")
    }

    

    return (<form className='form'>
                <div className='form-body'>
                    <div className='username'>
                        <label className='form_label' htmlFor="username">Username</label>
                        <input className='form_input' type="text" value={username} onChange = {(e) => handleInputChange(e)} id="username" placeholder='Username'/>
                    </div>
                    <div className='password'>
                        <label className='form_label' htmlFor="password">Password</label>
                        <input className='form_input' type="password" value={password} onChange = {(e) => handleInputChange(e)} id="password" placeholder='Password'/>
                    </div>
                    <div className='submitButton'>
                        <button onClick={(event) => handleSubmit(event)} type='submit' className='btn'>Login</button>
                    </div>
             </div>
         </form>)

}

export default Login;