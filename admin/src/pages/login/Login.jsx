import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/apiCall'
import { useNavigate } from 'react-router';
import { useSelector } from "react-redux";


const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const admin = useSelector((state)=> state.user.currentUser);

    const handleLogin = (e) => {
        e.preventDefault();
        // Instead of direct api call, we will be using Redux toolkit
        login(dispatch, { username, password });
        // JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser ? navigate('/') : console.log("Server Crashed due to Invalid credentials, restart server and try with correct credentials");
        // navigate('/');
        admin ? navigate('/') : console.log("Server Crashed due to Invalid CREDENTIALS");
    }

    return (
        <>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", flexDirection: "column"}}>
            <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} style={{padding: 10, marginBottom: 20}} />
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} style={{padding: 10, marginBottom: 20}} />
            <button onClick={handleLogin} style={{padding: 10, width: "100px"}}  >Login</button>
        </div>
        </>
    )
}

export default Login