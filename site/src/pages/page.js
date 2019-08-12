import React from "react";
import { Header } from "gatsby-theme-chaleur";
import { Container } from "gatsby-theme-chaleur";
import { Border } from "gatsby-theme-chaleur";
import { Navbar } from "gatsby-theme-chaleur";
// for overriding colors
import { colors } from "gatsby-theme-chaleur";
 
export default () => {
    return (
        <div>
            <Navbar>
              <a href="/">Home</a>
              <a href="https://www.npmjs.com/package/@endormi/gatsby-theme-chaleur">Gatsby-Theme-Chaleur</a>
            </Navbar>
            <Header>
              <h1 style={{color: colors.regular}}>Text</h1>
            </Header>
            <Container>
              <div>Page stuff</div>
              <Border>
                <p>Text inside a border</p>
              </Border>
            </Container>
        </div>
    )
}