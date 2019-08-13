// Site to not break running demo site
import React from "react";
import Header from "../components/Header/Header";
import Border from "../components/Border/Border";
import Navbar from "../components/Navbar/Navbar";
import "typeface-roboto";
import "../components/style.css";

export default () => {
    return (
        <div>
            <Navbar>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/page">Page</a>
            </Navbar>
            <Header><h1>Hello World!</h1></Header>
            <Border>
            <p>This is an simple Hello World page!</p>
            </Border>
        </div>
    )
}