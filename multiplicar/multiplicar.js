const fs = require('fs');
const path= require('path');



let base=2;



let crearArchivo = (base,limite) => {
    return new Promise ((resolve,reject)=>{
        let dato_tabla='';
        let dir='./tmp';

        if (!Number(base))
        {
            reject('No es un numero');
            return;
        }

        for (let n=1;n<=limite;n++)
        {
            //console.log(`${base} * ${n} = ${n*base}`)
        dato_tabla+=`${base} * ${n} = ${n*base} \n`;
        }

        fs.writeFile(path.join(dir,`tablas-${base}-hasta${limite} .txt`), dato_tabla, (err) => {
            if (err) reject(err) 
            else 
            resolve(`tabla-${base}.txt`);
            //console.log('The file has been saved!');
          });
        }


    );
}


let listarTabla = (base,limite=10 ) => {
    for (n=0;n<=limite;n++)
    {
        console.log(`${n} x ${base} = ${n* base }`);
    }

}


module.exports={
    crearArchivo,listarTabla
}


// async function main(dato_a_fichero)
// {
// var dir = './tmp';

// if (!fs.existsSync(dir)){
//     fs.mkdirSync(dir);

// }

// await 

// main(dato_tabla).then(console.log('todo bien'))
// .catch(err=()=>console.log('mumal '));