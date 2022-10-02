"use strict";
exports.__esModule = true;
var fs = require("fs"); // npm install --save-dev @types/node
function func(data) {
    var t = 0;
    data.forEach(function (item) {
        t += item.age;
    });
    return t;
}
var content = fs.readFileSync('data.json');
var data = JSON.parse(content.toString());
console.log(func(data));
