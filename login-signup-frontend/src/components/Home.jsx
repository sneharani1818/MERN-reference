import React from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext.jsx'; //for universal context to logged in user

const Home = () => {
    const navigate = useNavigate();
    const { user } = React.useContext(UserContext); //to get user from context
    const handelogin = () => {
        navigate('/login');
    }
    const handlesignup = () => {
        navigate('/signup');
    }
    return (
        <div>
            <h1>Home page</h1>
            <h3>Welcome {user}</h3>
            <button onClick={handelogin}>Login</button>
            <button onClick={handlesignup}>Signup</button>
        </div>
    )
}

export default Home