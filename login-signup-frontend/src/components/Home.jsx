import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handelogin = () => {
        navigate('/login');
    }
    const handlesignup = () => {
        navigate('/signup');
    }
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={handelogin}>Login</button>
            <button onClick={handlesignup}>Signup</button>
        </div>
    )
}

export default Home