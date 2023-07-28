// Con callback

const fs = require('node:fs');

fs.readFile('./text.txt','utf-8',(err,text)=>console.log(text));

console.log('Deberia salir primero por la asincronia ...');

fs.readFile('./text2.txt','utf-8',(err,text)=>console.log(text));

console.log('Leeré el segundo archivo ...');