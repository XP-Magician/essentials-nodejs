//Modulo para importar fileSystem 
const fs = require('node:fs');

const stats = fs.statSync('./text.txt');

console.log(stats.isFile());