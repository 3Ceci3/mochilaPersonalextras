//Gastos del mes por semana
//Armar una matriz de 4x7

let mes = [
  [100, 120, 300, 400, 510, 400, 510], //semana1
  [190, 120, 380, 400, 510, 422, 510], //semana2
  [160, 170, 300, 490, 510, 477, 510], //semana3
  [100, 120, 300, 400, 509, 400, 510], //semana4
];

//Gastos de la semana 2:
function totalSemana(matriz) {
  let totalgastos = 0;

  for (let i = 0; i < matriz[1].length; i++) {
    totalgastos += matriz[1][1];
  }
  return totalgastos;
}
console.log(mes[1][i]);

//Total gastos en un día miércoles
function totalDia(matriz) {
  let totalGanancias = 0;
  for (let i = 0; i < matriz.length; i++) {
    totalGanancias += matriz[i][2];
  }
  return totalGanancias;
}

//Total gastos en un día que yo le indique
function totalDia(matriz, dia) {
  let totalGanancias = 0;
  for (let i = 0; i < matriz.length; i++) {
    totalGanancias += matriz[i][dia - 1];
  }
  return totalGanancias;
}
//console.log(totalDia(mes, 3));

//Total de gastos de mes:
function totalMes(matriz) {
  let total = 0;

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      total += matriz[i][j];
    }
  }
  return total;
}
console.log(totalMes(mes));

/** EJERCICIO DE MESA
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */
let numeros = [
  [10, 3, 2, 1, 4, 7],
  [5, 5, 10, 100, 4],
  [5, 125, 10, 1020, 4],
  [5, 5, 5097, 100, 4],
];

function sumar(mat) {
  let suma = 0;
  for (let i = 0; i < mat.length; i++) {
    for (let c = 0; c < mat[i].length; c++) {
      if (mat[i][c] >= 10 && mat[i][c] < 1000) {
        suma += mat[i][c];
      }
    }
  }
  return suma;
}
console.log(sumar(numeros));
