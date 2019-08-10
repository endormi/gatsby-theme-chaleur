import React from "react";
import { Layout, Header, Main, Container } from "./Theme/Theme";

const ThemeLayout = ({ children }) => {
  return (
    <Layout>
      <Header>{children}</Header>
        <div style={{ margin: `0 auto`, maxWidth: 500, padding: `0 1rem` }}>
          {children}
        </div>
      <Main>
        <h1>{children}</h1>
        <Container>{children}</Container>
      </Main>
    </Layout>
  )
}

export default ThemeLayout