# postcss-rgb-plz [![npm version](https://badge.fury.io/js/postcss-rgb-plz.svg)](http://badge.fury.io/js/postcss-rgb-plz)


[PostCSS](https://github.com/postcss/postcss) plugin to convert hex colors to rgb.

```css
.foo {
  color: #333;
  box-shadow: 2px 2px 4px #f1f1f1;
}
```

```css
.foo {
  color: rgb( 51, 51, 51 );
  box-shadow: 2px 2px 4px rgb( 241, 241, 241 );
}
```

## Install

```
npm i --save-dev postcss-rgb-plz
```

## Usage

```js
postcss([ require('postcss-rgb-plz') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for examples for your environment.

### Reasoning

Part of the CSS styleguide at my work is to always use rgb values for color, and sometimes I like to use hexes/my preprocessor will convert to hexes. This solves that issue.


