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
    fs.appendFile('./text.txt', '\nThats looks like after saving', function (err) {
        if (err) throw err;
        console.log('Saved!'.blue);
        fs.readFile('./text.txt', 'utf-8', function (err, data) {
            console.log('Data after saving'.red);
            console.log(data);
        });
    });
});

fs.readdir('.', function (err, files) {
    if(err) throw err;
    fs.writeFile('./save.txt', files, function (err){
        if(err) throw err;
        console.log('Saved'.green);
    });
});








// fs.readFile('./text.txt', 'utf-8', function (err, data) {
//     console.log(data);
// });

// fs.writeFile('./text.txt', 'Jestem coraz bliżej mojego celu bycia programista', function (err) {
//     if (err) throw err;
//     console.log('Saved! :)');
// });