import React from "react"
import './index.css'

export const Header = () => {
    return (
        <header style={{paddingBottom: '5rem'}}>
            <div className="header-class">
                <nav style={{display: "inline-block"}}>
                    <ul className="nav-ul">
                        <li><a href="#" className="nav-link">Team</a></li>
                        <li><a href="#" className="nav-link">News</a></li>
                        <li><a href="#" className="nav-link">Gallery</a></li>
                    </ul>
                </nav>
                <div style={{display: "inline-block"}}>
                    <a href="#">
                        <img src="Table-tennis-1.png" style={{height: "100px"}} />
                    </a>
                </div>
                <div style={{display: "inline-block"}}>
                    <a href="#" className="header-button">Shop<strong>↗</strong></a>
                </div>
            </div>
            <div className="big-text header-text">
                Our club
            </div>
        </header>
    )
}