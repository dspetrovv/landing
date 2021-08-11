import React from 'react'
import './index.css'

export const Footer = () => {

    return (
        <footer className="footer-block">
            <div className="footer-nav">
                <nav style={{display: "flex", flexDirection: "row"}}>
                    <ul className="footer-list footer-nav-1">
                        <li><a href="#">Team</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Investor</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                    <ul className="footer-list footer-nav-2">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">For the fans</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </nav>
                <nav>
                    <ul className="footer-list footer-nav-2">
                        <li><a href="#">VK</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                    </ul>
                </nav>
            </div>
            <div className="copyright-block">
                &copy;My company • 2021 | My <a href="#" style={{color: "red"}}>GitHub</a>
            </div>
        </footer>
    )
}