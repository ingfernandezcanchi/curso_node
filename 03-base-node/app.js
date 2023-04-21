const { number, options } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

require('colors');

console.clear();
console.log(process.argv);
console.log(argv)
console.log('base: yargs', argv.base)

//const base = 5;
/*console.log(process.argv);
const [,,arg3='base=5'] = process.argv;
console.log(arg3);
const[,base] = arg3.split('=');
console.log(base);*/

crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(`${nombreArchivo} Creado correctamente.`.rainbow))
    .catch(err => console.log(err));

    