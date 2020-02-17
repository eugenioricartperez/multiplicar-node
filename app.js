//requieres
const argv = require('./config/yargs').argv;
const colors = require ('colors');
//const argv = require('yargs').argv;

console.log(argv)

const multiplicar =require('./multiplicar/multiplicar.js');

//let base='7aaa';

// console.log(module);

// console.log(multiplicar);

console.log(process.argv);
let comando =argv._[0];

//   let argv2=process.argv;
//   let param_base=argv[2];
//   base=param_base.split('=')[1];
//   console.log(param_base.split('=')[1]);

switch(comando) {
  case 'listar':
    console.log(`listar Tabla del ${argv.base}`);
multiplicar.listarTabla(argv.base,argv.limite);
    break;
  case 'crear':
    console.log('crear');
     multiplicar.crearArchivo(argv.base,argv.limite)
 .then(archivo=>console.log(`Archivo creado :${archivo}`.green))
 .catch(e=>console.log(e));
    break;
  default:
      console.log('comando no existe');
      break;
}
