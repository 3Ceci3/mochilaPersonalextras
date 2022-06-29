const arrayCuentas = [
  {
    titular: "Arlene Barr",
    estaHabilitada: false,
    saldo: "$3,253.40",
    edadTitular: 33,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Roslyn Torres",
    estaHabilitada: false,
    saldo: "$3,229.45",
    edadTitular: 27,
    tipoCuenta: "sueldo",
  },

  {
    titular: "Cleo Lopez",
    estaHabilitada: true,
    saldo: "$1,360.19",
    edadTitular: 34,
    tipoCuenta: "corriente",
  },
  {
    titular: "Daniel Malone",
    estaHabilitada: false,
    saldo: "$3,627.12",
    edadTitular: 30,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Ethel Leon",
    estaHabilitada: true,
    saldo: "$1,616.52",
    edadTitular: 34,
    tipoCuenta: "sueldo",
  },
  {
    titular: "Harding Mitchell",
    estaHabilitada: true,
    saldo: "$1,408.68",
    edadTitular: 25,
    tipoCuenta: "corriente",
  },
];

//Obtener un nuevo array de cuentas cuyas edades sean menores a 30

function cuentasSub30(arry) {
  let acumuladorCuentas = [];
  for (i = 0; i < arry.length; i++) {
    if (arry[i].edadTitular < 30) {
      acumuladorCuentas.push(arry[i]);
    }
  }
  return acumuladorCuentas;
}
//console.log(cuentasSub30(arrayCuentas));

//Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30
function mayoresOiguales30(arry) {
  let acumulador = [];
  for (i = 0; i < arrayCuentas.length; i++) {
    if (arry[i].edadTitular >= 30) {
      acumulador.push(arry[i]);
    }
  }
  return acumulador;
}
//console.log(mayoresOiguales30(arrayCuentas));

//Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
function mayoresOiguales30(arry) {
  let acumulador = [];
  for (i = 0; i < arrayCuentas.length; i++) {
    if (arry[i].edadTitular >= 30) {
      acumulador.push(arry[i]);
    }
  }
  return acumulador;
}
//console.log(mayoresOiguales30(arrayCuentas));

//Obtener la cuenta con el titular de la misma más joven.
function cuentaMasjoven(array) {
  let cuenta = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].edadTitular < cuenta.edadTitular) {
      cuenta = array[i];
    }
  }
  return cuenta;
}
//console.log(cuentaMasjoven(arrayCuentas));

//Obtener un nuevo array con las cuentas habilitadas
function cuentasHabilitadas(arry) {
  let acumulador = [];
  for (i = 0; i < arry.length; i++) {
    if (arry[i].estaHabilitada === true) {
      acumulador.push(arry[i]);
    }
  }
  return acumulador;
}
console.log(cuentasHabilitadas(arrayCuentas));

//Obtener un array por cada tipo de cuenta

function tiposDeCuenta(arry) {
  let cuentaSueldo = [];
  let cuentaCorriente = [];
  for (i = 0; i < arry.length; i++) {
    if (arry[i].tipoCuenta == "sueldo") {
      cuentaSueldo.push(arry[i]);
    } else {
      cuentaCorriente.push(arry[i]);
    }
  }
  return { saldo: cuentaSueldo, corriente: cuentaCorriente };
}
console.log(tiposDeCuenta(arrayCuentas));

//Obtener la cuenta con el menor saldo
//Fórmula correcta- num es string USAR string replace

function menorSaldo(arr) {
  let cuentaChica = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].saldo < cuentaChica.saldo) {
      cuentaChica = arr[i];
    }
  }
  return cuentaChica;
}
//console.log(menorSaldo(arrayCuentas));
