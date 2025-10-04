import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserContext } from '../context/UserContext.jsx'; //for universal context to logged in user

const Login = () => {
    const [user, setInputUser] = useState("")
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { setUser } = React.useContext(UserContext); //to set user in context

    const handlelogin = async (e) => {
        e.preventDefault();
        // redirecting to Home page
        // check correct username and password
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { user, password });
            console.log(res.data)
            if (res.data.success) {
                setUser(user); //set user in context
                console.log("login successful");
                navigate('/');
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.log(error);
        }
    }


    const signuppage = () => {
        // redirecting to Signup page
        navigate('/signup');
    }
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <input type="text" placeholder='Username' value={user} onChange={(e) => { setInputUser(e.target.value) }} /> <br />
                <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
                <button onClick={handlelogin}>Login</button>
                <button onClick={signuppage}>Signup</button>
            </form>
        </div>
    )
}

export default Login