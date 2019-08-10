import React from "react";
import "typeface-roboto";
import Layout from "../components/Layout"
import "../components/css/style.css";

export default ({ children }) => {
    return (
        <div>
            <h1>Hello World!</h1>
            <p>This is an simple Hello World page!</p><br />
            <p>{children}</p>
        </div>
    )
}