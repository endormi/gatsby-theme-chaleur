import React from "react"
import "typeface-roboto"
import "../components/css/style.css"
import image from "../img/gatsby.png"

export default () => {
    return (
        <div>
        <img src={image} style={{ width: `75px` }} alt="Logo" />
        <h1>About page!</h1>
        <p>This is an simple about page!</p></div>
    )
}