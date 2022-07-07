import React from "react";
import './notFound.css'
import {Link} from "react-router-dom";

const NotFound = () => {
    return(
        <div className="not-found-page">
            <h1 className="not-found-code">404</h1>
            <h1 className="not-found-title">Page Not Found</h1>
            <Link to="login" className="go-to-login">Go to Login Page</Link>
        </div>
    )
}

export default NotFound