import React, { useEffect } from 'react';
import { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './signup.css';


function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
 
    let navigate = useNavigate();

    // Handling the name change
    const handleName = (e) => {
        setName(e.target.value);
        setSubmitted(false);
    };

    // Handling the email change
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setUser([{name:name,email:email,password:password}])
        
        // setUser(prevUser => [...prevUser, { name: name, email: email, password: password }])
        setError("");
        navigate("/");
        setSubmitted(true);
        
    };
   

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                }}>
                <h1>User {name} successfully registered!!</h1>
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
                <h1>Please enter all the fields</h1>
            </div>
        );
    };
    return (
        <div className='form-outer' id="register">
            <div className="form" id="container">
                <div>
                    <h1>User Registration</h1>
                </div>

                {/* Calling to the methods */}
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>

                <form>
                    <label className="label">Name</label>
                    <input data-tid="name" onChange={handleName} className="input"
                        value={name} type="text" />

                    <label className="label">Email</label>
                    <input data-tid="email" onChange={handleEmail} className="input"
                        value={email} type="email" />

                    <label className="label">Password</label>
                    <input data-tid="password" onChange={handlePassword} className="input"
                        value={password} type="password" />

                    <button data-tid="signupButton" onClick={handleSubmit} className="btn" type="submit">
                        Submit
                    </button>
                </form>
               
            </div>
            
            <div style={{ margin: "10px;", textAlign: "center" }}>
                Already have an account? <Link to="/">Log In</Link>
            </div>
        </div>
    )
}

export default Signup