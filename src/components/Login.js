import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import './signup.css'
import { Link, useNavigate } from "react-router-dom";


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    
    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };
    // useEffect(()=>{
    //     localStorage.setItem("user",JSON.stringify(user));
    // },[user])

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
       
        try {
            console.log(email)
            if(user[0].email===email && user[0].password===password){
                setSubmitted(true);
                
                navigate("/card")
            }
            else {setSubmitted(false)
                alert("wrong username or password");
            }
            // if(user)setSubmitted(true);
            // for (let i = 0; i < user.length; i++) {
            //     if (email === user[i].email) {
            //         navigate("/welcome");
            //     }
            //     else {
            //         alert("wrong password or email ")
            //         navigate("/");
            //     }
            // }

        } catch (err) {
            setError(err.message);
            setSubmitted(false);
        }
        
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {email} successfully logged!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                }}>
                <h1>signup first</h1>
            </div>
        );
    };
    return (
        <div className='form-outer' id="login">
            <div className="form" id="container">
                <div>
                    <h1>User Login</h1>
                </div>

               
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                
                <form>
                    <label className="label">Email</label>
                    <input data-tid="loginEmail" onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">Password</label>
                    <input data-tid="loginPassword" onChange={handlePassword} className="input"
                        value={password} type="password" />

                    <button data-tid="loginButton" onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>

            <div style={{ margin: "10px;", textAlign: "center" }}>
                Do not have an account? <Link data-tid="signup" to="/register">Sign Up</Link>
            </div>
        </div>
    )
}

export default Login