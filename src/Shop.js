import React, { useEffect } from "react"
import { useIntersect } from "./Hooks/useIntersect"
import './index.css'

export const Shop = () => {
    const intersectionOne = useIntersect()
    const intersectionTwo = useIntersect()

    return (
        <div className="shop-block">
            <a href="#" className="shop-link">
                <div
                    className="big-text shop-element"
                    style={{width: "50%"}}
                    ref={intersectionOne.intersection.ref}
                >
                    Our official shop
                </div>
                <div className="shop-text shop-element" ref={intersectionTwo.intersection.ref}>
                    Visit now<strong>↗</strong>
                </div>
            </a>
        </div>
    )
}