import React from "react";
import { Navbar } from "gatsby-theme-chaleur";

export default () => {
    return (
        <div>
            <Navbar>
                <a href="/">Home</a>
                <a href="/about" className="active">About</a>
                <a href="/page">Page</a>
                <a href="/site">Site</a>
            </Navbar>
            <h1>About page!</h1>
            <p>This is an simple about page!</p>
        </div>
    )
}