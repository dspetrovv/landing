import React, { useState, useRef, useEffect } from "react"
import './index.css'
import './Images/image-2.png'

export const Header = () => {
    const [images, setImages] = useState([
        'url("/Images/image-2.png")',
        'url("/Images/image-3.png")',
        'url("/Images/Students.png")',
        'url("/Images/image-1.png")',
      ])
    const headerRef = useRef(null)
    let iterator = useRef(0)

    useEffect(() => {
        setInterval(() => {
            const bgImage = images[iterator.current];
            if (iterator.current == 3)
                iterator.current = 0
            else
                iterator.current++
            headerRef.current.style.backgroundImage = process.env.PUBLIC_URL + bgImage
        }, 3000)
    })
    
    return (
        <header ref={headerRef} style={{paddingBottom: '5rem'}}>
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
                        <img src={process.env.PUBLIC_URL + "/Images/Table-tennis.png"} style={{height: "100px"}} />
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