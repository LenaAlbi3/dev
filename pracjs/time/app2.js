/* EJERCICIO 1 */
/* Callback simple */

function saludarUsuario(nombre, cb){
    console.log(`Hola, ${nombre}`);
};

saludarUsuario("carlos", () => {
    console.log("gracias por venir");
});

/* EJERCICIO 2 */
/* Callback suma */

function operar(a, b, cb){
    return cb(a, b);
}

const suma = (numero1, numero2) => numero1 + numero2;

const resta = (numero1, numero2) => numero1 - numero2;


console.log(operar(4, 5, suma));

console.log(operar(4, 5, resta));


/* EJERCICIO 3 */
/* Closure contador */

function crearContador(){
    let contador = 0;
    return function (){
        contador++;
        return contador;
    }
};

const contar = crearContador();

console.log(contar());
console.log(contar());
console.log(contar());
console.log(contar());


/* NIVEL 2 */
/* EJERCICIO 1 */

function ejecutarConManejo(cb, errorCb){
    try{
        cb();
    } catch (error) {
        errorCb(error);
    }
}

ejecutarConManejo(
    () => {
        throw new Error("404 not found");
    },
    (err) => {
        console.error("Error manejado:", err.message);
    }
);

/* NIVEL 2 */
/* EJERCICIO 2 */

function filtrarArray(array, cb){
    const resultado = [];
    /* array.filter(pares) se supone q es la version facil*/
    for(let elemento of array){
        if(filtrado(elemento)) resultado.push(elemento);
    }
    return resultado;
}

const pares = filtrarArray([1, 2, 3, 4, 5, 6], (elNumero) => elNumero % 2 === 0);