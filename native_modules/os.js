const os = require('node:os');

console.log ('Informacion del sistema: ');
console.log ('_______________________________________ ');
os.cpus().map(cpu=>console.log(cpu));
console.log ('S.O :'+os.platform());
// Etc , con cada info que requiramos del S.O

/* CPU , podemos escalar procesos en nodejs */
