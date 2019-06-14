//required

// const fs = require('express');
// const fs = require('./fs');


const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { createFile, tableList } = require('./multiplicar/mutiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar');
        tableList(argv.base, argv.limite);
        break;
    case 'crear':
        console.log('crear');
        createFile(argv.base, argv.limite).then(
            archivo => console.log(`Archivo creado: ${archivo}`, colors.green(archivo))
        ).catch(error => {
            console.log(error);
        });
        break;
    default:
        console.log('Comando no reconocido');
}
// console.log(argv);


// let param = argv[2];
// let base = param.split("=")[1];


// console.log(createFile);

// createFile(base).then(
//     archivo => console.log(`Archivo creado: ${archivo}`)
// ).catch(error => {
//     console.log(error);
// });