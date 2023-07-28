const fs = require('node:fs/promises');

fs.readdir('.')
    .then(files=>files.forEach(f=>console.log(f)))
    .catch(err=>console.log(err));