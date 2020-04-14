const fs = require("fs");

exports.array = function(array) {
    return array[Math.floor(Math.random() * array.length)];
}