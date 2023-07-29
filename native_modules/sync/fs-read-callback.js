// Con callback

const fs = require('node:fs');

fs.readFile('./text.txt', 'utf-8', (err, text) => !err ? console.log(text) : process.end(1));

console.log('Deberia salir primero por la asincronia ...');

fs.readFile('./text2.txt', 'utf-8', (err, text) => !err ? console.log(text) : process.end(1));

console.log('Leeré el segundo archivo ...');
