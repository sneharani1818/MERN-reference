import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handelogin = () => {
        navigate('/login');
    }
    const handlesignup = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', { user, password })
            console.log(res.data)
            if (res.data.success) {
                console.log("Sign up successful");
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1>Sign up page</h1>
            <input type="text" placeholder='Username' value={user} onChange={(e) => { setUser(e.target.value) }} /> <br />
            <input type="password" placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br />
            <button onClick={handelogin}>Login</button>
            <button onClick={handlesignup}>Create account</button>
        </div>
    )
}

export default Signup