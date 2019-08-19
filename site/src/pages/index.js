import React from "react";
import { Header } from "gatsby-theme-chaleur";
import { Container } from "gatsby-theme-chaleur";
import { Border } from "gatsby-theme-chaleur";
import { Button } from "gatsby-theme-chaleur";
import { Navbar } from "gatsby-theme-chaleur";
import { colors } from "gatsby-theme-chaleur";

export default () => {
    return (
        <div>
            <Navbar>
              <a href="/" className="active">Home</a>
              <a href="/about">About</a>
              <a href="/page">Page</a>
              <a href="https://www.npmjs.com/package/@endormi/gatsby-theme-chaleur">Gatsby-Theme</a>
              <a href="https://github.com/endormi/gatsby-theme-chaleur">GitHub</a>
            </Navbar>
            <Header>
              <h1 style={{color: colors.regular}}>Text</h1>
            </Header>
            <Container>
              <div>Page stuff</div>
              <Border>
                <p>Text inside a border</p>
              </Border>
              <Button>
                <p>Button</p>
              </Button>
            </Container>
        </div>
    )
}