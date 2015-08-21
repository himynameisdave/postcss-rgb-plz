var postcss = require('postcss'),
    color   = require('color');

module.exports = postcss.plugin('postcss-rgb-plz', function (opts) {

    return function (css) {
      //  loop through each CSS declaration
      css.eachDecl(function(decl){
        // The value of that declaration
        var val = decl.value;
        //  if there even is a value...
        if( val ){
          //  create a list of hexes in a given value
          var hexes = val.match(/#\w{3,6}/g);
          //  as long as there actually are hexes...
          if( hexes.length > 0 ){
            // ...we loop through them and replace them with the rgb string
            hexes.forEach( function( hex ){
              decl.value = val.replace( hex, color(hex).rgbString() )
            });
          }
        }
      });
    };
});
