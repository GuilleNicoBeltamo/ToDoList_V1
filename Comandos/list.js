function list (){

    const Datos = require('../taskData.js');
    var Titulos = [];
    
for (let i=0; i<Datos.length ; i++){
     //console.log(Tasks[i].title)
     Titulos.push(Datos[i].title)
    }
    return Titulos
}

//console.log(list())

module.exports = {
    list
}