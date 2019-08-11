import React from "react";
import Header from "../components/Header/Header";
import Border from "../components/Border/Border";
import "typeface-roboto";
import "../components/style.css";

export default () => {
    return (
        <div>
            <Header><h1>Hello World!</h1></Header>
            <Border>
            <p>This is an simple Hello World page!</p>
            </Border>
        </div>
    )
}