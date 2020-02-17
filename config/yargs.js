

const opts = { base:{
    demand: true,
    alias:'b'
}
,limite:{
      alias:'l',
      demand:false,
      default:10
}
}

const argv =require('yargs').command(['Listar','crear'],'Imprime en consola la tabla de multiplicar', opts)
.argv;

module.exports ={
    argv
}