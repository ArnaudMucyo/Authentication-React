import React from 'react';
import './registration.css'
import {Link} from "react-router-dom";

const registration = () => {
    return(
        <div>

            <div className="registration-page">

                <h1 className="registration-title">Enter your personal details to register</h1>

                <input type="text" className="name-input" placeholder="First Name"/>
                <input type="text" className="name-input" placeholder="Last Name"/>
                <input type="email" className="email-input" placeholder="Email"/>
                <input type="password" className="password-input" placeholder="Password"/>
                <input type="password" className="password-input" placeholder="Confirm Password"/>

                <button className="registration-submit" type="submit">REGISTER</button>

                <p className="no-account">Have an account? <Link to="/login" className="login-link">Login</Link></p>

            </div>

        </div>
    )
}

export default registration;