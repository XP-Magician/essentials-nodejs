const path = require('node:path');
const fs = require('node:fs/promises');
const colors = require('picocolors');

// Si recibe parametros los toma y sino por defecto usa el directorio raiz actual
const folder = process.argv[2]??'.';

// Obtiene todos los archivos que estan contenidos en el directorio especificado
const getFiles = async (target_path)=>{
    let files 
    try{
        files =await fs.readdir(target_path);
    }catch(err){
        colors.red(`Error al analizar el directorio ${folder}`);
        process.exit(1);
    }
    return files;

}


// Lista los archivos obtenidos previamente
const ls = async () =>{
// Espera a la obtencion antes de continuar
const files = await (getFiles(folder));


let stats;


/* Itera cada elemento de forma asincrona, es decir, tenemos un array de promesas 
Este array de promesas debe ser manejado posteriormente para obtener sus datos
 una vez las promesas se hayan resuelto */
const allPromises= files.map(async file=>{


        /*files.map() solo se encarga de generar promesas que ejecutaran estas instrucciones
        por si mismas, es decir, cada file es una promesa que ejecutara estas instrucciones
         y devolvera lo especificado  */

        const file_path = path.join(folder,file);

        try{
        /* Este await no corresponde al proceso asincrono de files.map() sino que al de la promesa
         de element iterado por si misma */
            stats = await fs.stat(file_path);
        }catch{
            colors.red('Error listando los archivos del directorio');
            process.exit(1);
        }
     
        const isFile = stats.isFile()?'F':'D';
        const fileSize = stats.size.toString().padStart(20);
        const fileModified = stats.mtime.toLocaleDateString();
        return `--${colors.bold(isFile)} ${colors.green(file.padEnd(20))} ${colors.cyan(fileSize)} ${colors.yellow(fileModified)}`
        
    });


// Se devuelve el array con las promesas para ser manejado posteriormente
return allPromises;
}


/* IIFE para ejecutar el codigo asincrono ya que esta version de cmjs no admite awaits sin 
funciones declaradas como asincronas en el top, en caso de esm podriamos usar await en una constante*/
(async ()=>{
    const everyPromise = await ls();
    const filesInfo = await Promise.all( everyPromise);
    filesInfo.forEach(fileInfo => {
    console.log(fileInfo);
    })
})()