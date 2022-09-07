const {list} = require('./Comandos/list.js')
const {find} = require('./Comandos/find.js')
const {edit} = require('./Comandos/edit.js')
const {retorno} = require('./Comandos/retorno.js')
const {filter} = require('./Comandos/filter.js')

/* console.log(list());
console.log(find('Tarea 1'));
console.log(edit('Tarea 4','Nada Aun')); 
console.log(filter('ea'));*/

var entrada = process.argv; 
const comando = entrada[2];
const Parametro1 = entrada[3]; 
const Parametro2 = entrada[4]; 

switch (comando) {
    case 'find':
        console.log(find(Parametro1));
        break;
    case 'list':
        console.log(list());
        break;    
    case 'edit':
        console.log(edit(Parametro1,Parametro2));
        break;
    case 'retorno':
        console.log(retorno(Parametro1));
        break;
    case 'filter':
        console.log(filter(Parametro1));
        break;
    default: {
        console.log("Accion no definida")
        break
    }
    }