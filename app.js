const { crearTablas } = require("./helper/crearTablas");
const argv = require("yargs").argv;

console.clear();

console.log(process.argv);

console.log(argv);

console.log(`base:yargs`, argv.base)

//se desectrutar para agarra la base
//const [,, arg3] = process.argv
//esto se hacer para destruturar los string  arg3 (--base=x) se va serapra por el igual
//const [, base=0 ] =arg3.split ('=');

//console.log(base);

//const base = 9;

//crearTablas(base)
// .then((nombreArchivo) => console.log(nombreArchivo, "creado"))
//.catch((err) => console.log(err));
