var path = require('path');

var mymodule = require('./mymodule');
var dir = process.argv[2];
var ext = process.argv[3];

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    })
}

mymodule(dir, ext, callback);
