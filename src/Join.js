import React from 'react'
import { useIntersect } from './Hooks/useIntersect'
import './index.css'

export const Join = () => {
    const intersectionText = useIntersect()
    const intersectionForm = useIntersect()

    return (
        <div className="join-class">
            <div className="join-text-blocks join-element"
                ref={intersectionText.intersection.ref}
            >
                <h1 className="large-header">Join us</h1>
                <div className="join-text">Sign up for our newsletter for exclusive insights, latest news, content and exciting offers!</div>
            </div>
            <div className="form-card join-element"
                ref={intersectionForm.intersection.ref}
            >
                <form style={{
                    margin: "2rem", 
                    display: "flex",
                    flexDirection: "column"
                }}
                onSubmit={event => {event.preventDefault()}}
                >
                    <input type="email" className="join-form-input" placeholder="Enter e-mail" />
                    <button type="submit" className="join-form-btn">Subscribe</button>
                </form>
                <div className="privacy-policy">
                See our
                    <span>
                        <a href="#">Privacy Policy</a>
                    </span>
                </div>
            </div>
        </div>
    )
}