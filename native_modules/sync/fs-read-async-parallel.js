// Asincrono paralelo

const fs = require('node:fs/promises');

// Array de promesas que las ejecuta en paralelo y avisa cuando ambas terminen
// Si cualquiera falla cae al catch
Promise.all(
    [fs.readFile('./text.txt','utf-8'),
    fs.readFile('./text2.txt','utf-8')]
)
.then(([text1,text2])=>{
    console.log(text1);
    console.log(text2);
    }
);

