import React from 'react';
import logo from '../assets/shareitlogo.png'
import '../styles/main.scss'


const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <img alt="logo share it" src={logo} />
            </div>

            <div className="nav__list">
                <a href="/">Sign up</a>
                <a href="/">Sign in</a>
            </div>
        </div>
    )
}

export default Navbar