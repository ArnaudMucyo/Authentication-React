import React from "react";
import './login.css'
import {Link} from "react-router-dom";


export default function Login() {

    return(
        <div>
            <div className="login-page">

                <h1 className="login-title">Enter your credentials to access the website</h1>

                <input type="text" className="email-input" placeholder="Email"/>
                <input type="password" className="password-input" placeholder="Password"/>

                <button className="login-submit" type="submit">LOGIN</button>

                <p className="no-account">Don't have an account yet? <Link to="/register" className="register-link">Register now</Link></p>

            </div>
        </div>
    )
}

