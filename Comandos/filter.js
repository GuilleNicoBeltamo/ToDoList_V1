function filter (Parametro){

    const Datos = require('../taskData.js');
    let k = 0;
    let Opcion = [];

    for (let i=0; i<Datos.length ; i++){
        if(Datos[i].title.includes(Parametro)){
            Opcion.push(Datos[i].title)
        }    
    }

    return Opcion
    }

    module.exports = {
        filter
    }