let countHombresSistemas = 0;

let numAlumnos = prompt("Ingrese la cantidad de alumnos");

for (let i = 0; i < numAlumnos; i++) {
  let program = prompt("Ingrese el programa\nMoviles = 1\nProgramacion Avanzada = 2");

  if (program == 1) {
    let sex = prompt("Ingrese el sexo\nHombre = h\nMujer = m");

    if (sex == "h") {
      countHombresSistemas++;      

    }
  }
}

console.log(countHombresSistemas);