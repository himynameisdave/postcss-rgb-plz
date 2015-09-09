var fs       = require('fs'),
    test     = require('tape'),
    postcss  = require('postcss'),
    plugin   = require('..'),

    filename = function(name){ return "test/" + name + ".css" },
    read     = function(name){ return fs.readFileSync(name, "utf8") },

    //  thanks to this test written for the postcss-rebeccapurple plugin:
    //  https://github.com/postcss/postcss-color-rebeccapurple/blob/master/test/index.js
    compareFixtures = function( t, name, msg, opts, postcssOpts ){

      postcssOpts = postcssOpts || {}
      postcssOpts.from = filename("fixtures/" + name)
      opts = opts || {}
      var actual = postcss().use(plugin(opts)).process(read(postcssOpts.from), postcssOpts).css



      var expected = read(filename("fixtures/" + name + ".expected"))
      fs.writeFile(filename("fixtures/" + name + ".actual"), actual)
      t.equal(actual, expected, msg)

    };

    test( "basic", function(t){
      compareFixtures(t, "rgb-plz", "should transform hexes to rgb");
      t.end();
    });


    

    // test( "no-spaces", function(t){
    //   compareFixtures(t, "no-spaces-plz", "should transform hexes to rgb like normal", { spaces: false });
    //   t.end();
    // });

    // test( "yes-spaces", function(t){
    //   compareFixtures(t, "yes-spaces-plz", "should transform hexes to rgb with spaces between the brakets", { spaces: true });
    //   t.end();
    // });
