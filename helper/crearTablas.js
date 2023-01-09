
const fs = require("fs");
const { Module } = require("module");




const crearTablas =async  (base) => {
  try {let salida = "";

  for (let i = 1; i <= 10; i++) {
    salida += `${base} x ${i}= ${base * i}\n`;
  }
  console.log(salida);

  fs.writeFile(`tabla ${base}.txt`, salida, (err) => {
    if (err) throw err;

    return `tabla creada ${base}.txt`;
  });
    
  } catch (error) { throw err;
    
  }
};



module.exports ={crearTablas
}
