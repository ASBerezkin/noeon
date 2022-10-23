import React from 'react'
import './Logo.styles.scss'
import {Link} from "react-router-dom";

export const Logo = () => {
    return <Link to="/" className="logo-link">
        <div className="logo">
            <div className="logo-noeon">
                NOEON
            </div>
            <br/>
            <div className="logo-research">
                research
            </div>
        </div>
    </Link>
}