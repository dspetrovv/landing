import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export const useIntersect = () => {
    const {ref, inView, entry} = useInView({
        threshold: 0.5
    })

    useEffect(() => {
        if (entry?.isIntersecting) {
            entry?.target.classList.add('showed-element');
        }
    }, [entry?.isIntersecting])

    return {
        intersection: {ref, inView, entry}
    }
}