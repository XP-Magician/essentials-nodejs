const fs = require('node:fs');

const text = fs.readFileSync('./text.txt','utf-8');

console.log(text);