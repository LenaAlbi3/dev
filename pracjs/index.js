const h1El = document.querySelector("h1");
const bodyEl = document.querySelector("body");
const btnEl = document.getElementById("btn");
let oscuro = false;

const nombreUsuario = "pepe";

h1El.addEventListener("click", () => {
    h1El.innerText = `Hola ${nombreUsuario}`;
});

/*
btnEl.addEventListener("click", () => {
    oscuro = !oscuro;
    if(oscuro){
        bodyEl.className = "dark-mode";
        btnEl.textContent = "Modo claro";
    }
    else{
        bodyEl.className = "white-mode";
        btnEl.textContent = "Modo oscuro";
    }
    
});
*/

btnEl.addEventListener("click", () => {
    // .toggle sirve para switchear
    bodyEl.classList.toggle("dark-mode");
    // ternario
    bodyEl.classList.contains("dark-mode")
    ? (btnEl.textContent = "Modo claro")
    : (btnEl.textContent = "Modo oscuro");
});

// contador de caracteres

const textareaEl = document.getElementById("comentario");
const contadorCaracteresEl = document.querySelector("p");
const limite = 50;

// tipos de eventos: con el teclado o raton

textareaEl.addEventListener("input", () => {
    const largoFrase = textareaEl.value.length;

    if(largoFrase <= limite){
        contadorCaracteresEl.innerText = `Te quedan: ${limite - largoFrase} caracteres`
        contadorCaracteresEl.style.color = "black";
    }else{
        contadorCaracteresEl.innerText = `Te pasaste por: ${largoFrase - limite} caracteres`
        contadorCaracteresEl.style.color = "red";
    }
});

// buscador

const buscadorEl = document.getElementById("buscador");
const itemsEl = document.querySelectorAll(".nombre li");

// buscar callback
// addeventlistener es un metodo que escucha el evento y llama una funcion
// posteriormente, asi funciona callback, no se ejecuta hasta q 
// funcion principal lo decida

// las listas son listas de nodos y para mapearlas debemos transformarlo a array
// spray operator -> 

const valoresLista = [...itemsEl].map(li => li.textContent.toLowerCase());



buscadorEl.addEventListener("input", () => {
    const palabraBuscada = buscadorEl.value.toLowerCase();

    // cuando reciba datos de user pasarlo a minuscula p/ trabajar siempre en min
    const filtrados = valoresLista.filter((item) => item.includes(palabraBuscada));
    console.log(filtrados);

})
