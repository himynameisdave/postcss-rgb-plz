# PostCSS Rgb Plz [![Build Status][ci-img]][ci]

[PostCSS] plugin to convert hex colors to rgb.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/himynameisdave/postcss-rgb-plz.svg
[ci]:      https://travis-ci.org/himynameisdave/postcss-rgb-plz

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-rgb-plz') ])
```

See [PostCSS] docs for examples for your environment.

### Reasoning

Part of the CSS styleguide at my work is to always use rgb values for color, and sometimes I like to use hexes/my preprocessor will convert to hexes.
