'use strict';

var fs = require('fs');
var colors = require('colors');
var StatMode = require('stat-mode');

fs.stat('./kot.jpg', function (err, stats) {
    var statMode = new StatMode(stats);
    console.log(statMode.toString());
});

fs.readFile('./text.txt', 'utf-8', function (err, data) {
    console.log('Data before saving'.blue);
    console.log(data);
    fs.readdir('./save.txt', 'utf-8', function (err, data) {
        console.log('Create new file to saving data!'.green);
    });
    fs.appendFile('./save.txt', 'Thats looks like after saving\n', function (err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./save.txt', 'utf-8', function (err, data) {
            console.log('Data after saving'.red);
            console.log(data);
        });
    });
});









// fs.readFile('./text.txt', 'utf-8', function (err, data) {
//     console.log(data);
// });

// fs.writeFile('./text.txt', 'Jestem coraz bliżej mojego celu bycia programista', function (err) {
//     if (err) throw err;
//     console.log('Saved! :)');
// });