// variable global en toda la app, todo lo global sale de aqui (console,promise,fetch,etc)
globalThis.console('');

console.log('testing node');

// Patron de diseño modulo : separar el codigo en diferentes ficheros (import/export)
export const sum = (num1, num2) => (num1 + num2);

// commonJs : require    -   esm6 modules : import export
