<h1 align="center">
  Gatsby-Theme-Chaleur
</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@endormi/gatsby-theme-chaleur">
    <img alt="npm-version" src="https://img.shields.io/npm/v/@endormi/gatsby-theme-chaleur?color=blue">
  </a>
  <a href="https://github.com/endormi/gatsby-theme-chaleur/issues">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/endormi/gatsby-theme-chaleur">
  </a>
</p>

<p align="center">
This is my first gatsby-theme so this is highly experimental and a work-in-progress. 
Be sure to test this out and feature requests, issues and pull requests are highly appreciated.
</p>

## Installation

```sh
npm i @endormi/gatsby-theme-chaleur
```

Install dependencies:

```sh
yarn or yarn install
```

## Usage

```jsx
// gatsby-config.js
module.exports = {
    __experimentalThemes: ['gatsby-theme-chaleur']
}
```

Include the theme inside your sites `gatsby-config.js` and put in `__experimentalThemes` to use the theme.

### Import components

```jsx
import React from "react";
import { Header } from "gatsby-theme-chaleur";
import { Container } from "gatsby-theme-chaleur";
import { Border } from "gatsby-theme-chaleur";
// for overriding colors
import { colors } from "gatsby-theme-chaleur";
 
export default () => {
    return (
        <div>
            <Header>
              <h1 style={{color: colors.regular}}>Text</h1>
            </Header>
            <Container>
              <div>Page stuff</div>
            </Container>
            <Border>
              <p>Text inside a border</p>
            </Border>
        </div>
    )
}
```

##### Colors

```jsx
export default {
    primary: 'dodgerblue',
    secondary: 'rebeccapurple',
    regular: 'white',
    fruit: 'tomato',
    hp: 'hotpink',
    lp: 'lightpink',
    ls: 'lightsalmon',
    torq: 'turquoise',
    be: 'beige',
    dsg: 'darkseagreen',
    dsb: 'darkslateblue',
    dsgr: 'darkslategrey',
    iv: 'ivory',
    lv: 'lavender',
};
```

#### Running demo site

```sh
yarn workspace site start
```

## License

The source code is released under the [MIT License](https://github.com/endormi/gatsby-theme-chaleur/blob/master/LICENSE).