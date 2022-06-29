let matriz = [
  [1, 2],
  [3, 4],
];

////Imprimir todo en forma de tabla:
console.table(matriz);
//Imprimir 1er array:[1, 2]
console.log(matriz[0]);
//Imprimir 1 elemento:
console.log(matriz[0][0]); //1
console.log(matriz[0][1]); //2
console.log(matriz[1][0]); //3
console.log(matriz[0][1]); //4

//crear una matriz de 3filasx2columnas

let matriz2 = [
  [25, 20],
  [10, 12],
  [22, 36],
];
console.log(matriz2[1][1]); //12

//Matriz de 2x3
let arrayMatriz = [];
let arrayX = ["x0", "x1", "x2"];
let arrayY = ["y0", "y1", "y2"];

arrayMatriz.push(arrayX, arrayY);
console.table(arrayMatriz);

for (let fila = 0; fila < arrayMatriz.length; fila++) {
  for (let columna = 0; columna < arrayMatriz[fila].length; columna++)
    console.log(arrayMatriz[fila][columna]);
}

//Crear matriz de 10 x 10
function generarMatriz10por10() {
  let filas = [];
  let matriz = [];
  for (let i = 1; i <= 100; i++) {
    filas.push(i);
    if (i % 10 === 0) {
      console.log(filas);
      matriz.push(filas);
      filas = [];
    }
  }
  return matriz;
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10);

//Otra forma de crear matriz de 10x 10
function matriz10() {
  let matriz = [];
  let x = 1;
  for (var i = 0; i < 10; i++) {
    matriz[i] = [];
    for (var j = 0; j < 10; j++) {
      matriz[i][j] = x;
      x++;
    }
  }
  return matriz;
}
console.table(matriz10());
