const fs = require('node:fs/promises');
const folder = process.argv[2] ?? '.'

fs.readdir(folder)
    .then(files=>files.forEach(f=>console.log(f)))
    .catch(err=>console.log(err));