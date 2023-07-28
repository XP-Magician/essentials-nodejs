// Asincrono secuencial

const fs = require('node:fs/promises');

fs.readFile('./text.txt','utf-8')
    .then(text=>console.log(text));

console.log('Deberia salir primero por la asincronia (promesa) ...');

//IIFE 
(async()=>{
    const texto = await fs.readFile('./text2.txt','utf-8');
    console.log(texto);
})()

console.log('Leeré el segundo archivo (promesa) ...');