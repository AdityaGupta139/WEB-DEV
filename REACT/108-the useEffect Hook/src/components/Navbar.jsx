import React, { useEffect } from 'react'

const navbar = ({ color }) => {
    // case 1:Run on every render
    useEffect(() => {
        alert("hey i'll run on every render")
    })


    // case 2:run only on first render
    useEffect(() => {
        alert("hey welcome to my page.This is the first render")
    }, [])

    // case 3:run only when certains value are changed 
    useEffect(() => {
        alert("i am running because color was changed")

    }, [color])

    return (
        <div>
            i am navbar of color {color}
        </div>
    )
}

export default navbar
