// tipos de funciones - declaracion 

// default function nombrada -> admite hoisting (invocar funcion antes de crearla, se puede llamar a una f sin haber sido declarada)
// declaracion
function sumar(a, b){
    return a + b;
}

// invocacion -> () sin parentesis no se invoca
const suma = sumar(1, 4);
console.log(suma);

// function anonima
// no admite hoisting porque esta guardando una variable
// se declara como const porque se guarda en un lugar de memoria y se busca q se queden ahi y sean inmutables
// arrays y objetos siempre con const

const resta = function(){
    return a - b;
};

console.log(resta(6, 2));

// function autoinvocable, IIFE

(function(){
    console.log("hola");
})();

// arrow function 
// no admite hoisting.        -> ver los 7 bindings de la palabra "this"
// no se puede usar como metodo de una clase/objeto mientras q las demas, excepto la IIFE, si se pueden

const myFunction = (a, b) => {
    return a + b;
};

// si solo retorna una expresion se puede simplificar
const myFunction2 = (a, b) => a + b;

console.log(myFunction(2, 6));

// mas simple
const myFunction3 = (a) => a.toUpperCase();
console.log(myFunction3("Hola"));

