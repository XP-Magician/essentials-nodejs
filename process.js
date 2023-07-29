// Objeto process : global que proporciona info y control sobre el proceso actual de ejecucion
// Propiedades y metodos para interactuar con el entorno e info relacionada con el proceso actual

// Mostrar argumentos de entrada
console.log(process.argv);

// Escuchar eventos del proceso
process.on('exit', () => console.log('sali'));

// current working directory
console.log(process.cwd());

// Controlar el proceso y su salida
process.exit(0);
