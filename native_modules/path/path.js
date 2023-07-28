const path = require('node:path');

// Barra separadora segun SO
console.log(path.sep);

//Unir rutas (con barra separadora correspondiente)

const ruta = path.join('native_modules','path','path.js')
console.log(ruta);

// Obtener nombre base de un fichero contenido en un directorio, pudiendo eliminar su extension o nombre

const fichero = path.basename(ruta)
console.log(fichero);

const nombreFichero = path.extname(fichero);
const ficheroNombre = path.basename(ruta,'.js');

console.log(nombreFichero);
console.log(ficheroNombre);