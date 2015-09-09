var postcss = require('postcss'),
    color   = require('color');

module.exports = postcss.plugin('postcss-rgb-plz', function (opts) {

    return function (css) {
      // //  loop through each CSS declaration
      css.walkDecls(function(decl){
        // The value of that declaration
        var val = decl.value;
        //  if there even is a value...
        if( val ){
          //  create a list of hexes in a given value
          var hexes = val.match(/#\w{3,6}/g);
          //  as long as there actually are hexes...
          if( hexes && hexes.length > 0 ){
            //  where we're going to store our new val
            var newVal = val;
            // ...we loop through them and replace them with the rgb string
            hexes.forEach( function( hex ){
              newVal = newVal.replace( hex, color(hex).rgbString() );
            });
            //  and this is what actually sets the outputted value
            decl.value = newVal;
          }
        }
      });
    };
});
