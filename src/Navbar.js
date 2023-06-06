import React from "react"
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="main-container">
                <div className="logo-container">
                    <a className="navbar-item">
                      <h1 className="logo">
                        <span className="blue">a</span>v
                        <span className="yellow">e</span>n
                        <span className="blue">.</span>
                        </h1>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <button className="nav-buttons">Services</button>
                        <button className="nav-buttons">Work</button>
                        <button className="nav-buttons">About Me</button>
                        <button className="nav-buttons">Contact Me</button>
                    </div>
                </div>

            </div>
        </nav>
    )
}