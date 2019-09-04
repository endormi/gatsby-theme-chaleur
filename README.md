<h1 align="center">
  Gatsby-Theme-Chaleur
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@endormi/gatsby-theme-chaleur">
    <img alt="npm-version" src="https://img.shields.io/npm/v/@endormi/gatsby-theme-chaleur?color=blue">
  </a>
  <a href="https://www.npmjs.com/package/@endormi/gatsby-theme-chaleur">
    <img alt="npm-downloads" src="https://img.shields.io/npm/dt/@endormi/gatsby-theme-chaleur">
  </a>
</p>

<p align="center">
This is my first gatsby-theme so this is highly experimental and a work-in-progress. 
Be sure to test this out and feature requests, issues and pull requests are highly appreciated.
</p>

<p align="center">
NOTE: Some of these components might break, just keep that in mind. 
</p>

## Installation

```sh
npm i @endormi/gatsby-theme-chaleur
```

## Usage

Include the theme inside your sites `gatsby-config.js` and put in `__experimentalThemes` to use the theme.

```jsx
// gatsby-config.js
module.exports = {
    __experimentalThemes: ['@endormi/gatsby-theme-chaleur']
}
```

### Import components

```jsx
import React from "react";
import { Layout } from "@endormi/gatsby-theme-chaleur";
import { Header } from "@endormi/gatsby-theme-chaleur";
import { Container } from "@endormi/gatsby-theme-chaleur";
import { Border } from "@endormi/gatsby-theme-chaleur";
import { Button } from "@endormi/gatsby-theme-chaleur";
import { Buttonlg } from "@endormi/gatsby-theme-chaleur";
import { colors } from "@endormi/gatsby-theme-chaleur";

export default () => {
    return (
        <div>
            <Layout>
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
                <Border>
                  <p>Text inside a border</p>
                </Border>
                <Buttonlg>
                  <p>Button</p>
                </Buttonlg>
              </Container>
            </Layout>
        </div>
    )
}
```

##### Colors

```jsx
export default {
    primary: 'tomato',
    secondary: 'rebeccapurple',
    regular: 'white',
    reg: 'rgb(64,64,64)',
    hp: 'hotpink',
    ls: 'lightsalmon',
};
```

#### Running demo site

Git clone:

```sh
https://github.com/endormi/gatsby-theme-chaleur.git
```

Install dependencies:

```sh
yarn or yarn install
```

Run site:

```sh
yarn workspace site start
```

## License

The source code is released under the [MIT License](https://github.com/endormi/gatsby-theme-chaleur/blob/master/LICENSE).