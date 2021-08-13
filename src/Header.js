import React, { useRef, useEffect } from "react"
import './index.css'

export const Header = () => {
    const images = [
        'url("'+ process.env.PUBLIC_URL + '/Images/image-2.png")',
        'url("'+ process.env.PUBLIC_URL + '/Images/image-3.png")',
        'url("'+ process.env.PUBLIC_URL + '/Images/Students.png")',
        'url("'+ process.env.PUBLIC_URL + '/Images/image-1.png")',
      ]
    const headerRef = useRef(null)
    let iterator = useRef(0)

    useEffect(() => {
        setInterval(() => {
            headerRef.current.style.backgroundImage = images[iterator.current]
            if (iterator.current === 3) {
                iterator.current = 0
            } else {
                iterator.current++
            }
        }, 4000)
    })
    
    return (
        <header ref={headerRef} style={{paddingBottom: '5rem',backgroundImage: 'url("' + process.env.PUBLIC_URL + '/Images/image-1.png")'}}>
            <div className="header-class">
                <nav style={{display: "inline-block"}}>
                    <ul className="nav-ul">
                        <li><a href="/#" className="nav-link">Team</a></li>
                        <li><a href="/#" className="nav-link">News</a></li>
                        <li><a href="/#" className="nav-link">Gallery</a></li>
                    </ul>
                </nav>
                <div style={{display: "inline-block"}}>
                    <a href="/#">
                        <img
                            src={process.env.PUBLIC_URL + "/Images/Table-tennis.png"}
                            style={{height: "100px"}}
                            alt={'Table-tennis'}
                        />
                    </a>
                </div>
                <div style={{display: "inline-block"}}>
                    <a href="/#" className="header-button">Shop<strong>↗</strong></a>
                </div>
            </div>
            <div className="big-text header-text">
                Our club
            </div>
        </header>
    )
}