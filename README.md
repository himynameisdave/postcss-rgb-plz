# postcss-rgb-plz ![npm badge]()

[PostCSS] plugin to convert hex colors to rgb.

```css
.foo {
  color: #333;
}
```

```css
.foo {
  color: rgb( 51, 51, 51 );
}
```

## Usage

```js
postcss([ require('postcss-rgb-plz') ])
```

See [PostCSS] docs for examples for your environment.

### Reasoning

Part of the CSS styleguide at my work is to always use rgb values for color, and sometimes I like to use hexes/my preprocessor will convert to hexes. This solves that issue.
