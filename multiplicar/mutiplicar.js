const fs = require('fs');
const colors = require('colors');



let createFile = (base, limit) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base ${base} no es un número`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${ base * i} \n`;
        }


        fs.writeFile(`tables/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limit}.txt`)
        });
    });
}

let tableList = (base, limit = 10) => {
    console.log('=================================='.green);
    console.log(`Tabla del ${base} hasta ${limit}`.blue);
    console.log('=================================='.green);
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${ base * i} \n`);
    }

}

module.exports = {
    createFile,
    tableList
}