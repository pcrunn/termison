#! /usr/bin/env node

const fs = require('fs');
const args = process.argv;
const file = args[args.length-2];
const property = args[args.length-1];

fs.readFile(file, 'utf8', (err, content) => {
    if (err) {
        console.log('This file does not exist!');
        return;
    }
    let json = JSON.parse(content);
    const split = property.split('.');
    let result = json;
    split.forEach(path => result = result[path]);

    console.log(result);
});