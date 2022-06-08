//arrays

let alumno1 = "Pablo";
let alumno2 = "Pabla";
let alumno3 = "Maria";
let alumno4 = "Juan";

let alumnos = ["Pablo", "Pabla", "Maria", "Juan"];

console.log(alumnos[2]);
//va a mostrar Maria (el conteo empieza en 0)

//agregar 2 alumnos al final de la lista:
alumnos.push("Julia");

//quitar el ultimo elemento
alumnos.pop();
console.log(alumnos);

//devuelve 1, porque arranca de 0
console.log(alumnos.indexOf(Pabla));

//ver la longitud del array
let frase = "buenos dias como te va";
console.log(frase.length);
