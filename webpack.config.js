var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist"); //the dir where i want to copy all my transpiled and prepared-bundled files
//the dir from which i will actually serve my app
var SRC_DIR = path.resolve(__dirname, "src"); //to tell the webpack where it will find untraspiled source code

var config = {
    entry:SRC_DIR + "/app/index.js", //to tell webpack which file is the first file you should start your transpiling/boundling journey
    //webpack logic has one or many entries files and then it looks on the dependencies of this file
    //all import statements and pulls in this imports so it builds up a bundle starting at some 
    //entry point and bundling all required imports it automatically also make sure that they are pulled in right order.
    //index.js should be my root file, because this will be the file which starts my app later on.
    output:{//this tells webpack where to output everything
        path: DIST_DIR + "/app",
        filename: "bundle.js", //everything will be bundled, transpiled
        publicPath: "/app/" //this var is important for my webpack development server bcs we are putting everything in dist folder
                     //but on a real server we would deploy this folder, so this would be our public folder
                      // the app folder would be the right place to look because that will be where our app lives in.
    },
    module: {//all the modules  i wanna use during my webpack process , with the entry and output i already bundled everything
        //but i want transpiled es6 to es5 javascript standard,that s where will we setup here.
        rules: [
             {
                 test: /\.js?/,//e will have only one loader, babel will test this file, we want to identify all javascript files
                 include: SRC_DIR, //where are files to be scanned
                 loader: "babel-loader",
                 query: {
                     presets:["react","es2015","stage-2"] //presets required for babel 
                 }
             }
        ]

    },

    devServer: {
  proxy: {
   '/api': { target: 'http://localhost:3000', 
           pathRewrite: { '^/api': '' },
  },
  }
}
    

};
module.exports = config; //webpack will pullback in this config object and will read it and configure itself following config we configured here