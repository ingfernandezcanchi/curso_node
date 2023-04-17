const { crearArchivo } = require('./helpers/multiplicar')

console.clear();
//const base = 5;

console.log(process.argv);
const [,,arg3='base=5'] = process.argv;
console.log(arg3);
const[,base] = arg3.split('=');
console.log(base);

crearArchivo(base)
    .then( nombreArchivo => console.log(`${nombreArchivo} Creado correctamente.`))
    .catch(err => console.log(err));

    