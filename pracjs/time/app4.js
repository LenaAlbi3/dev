// ejercicio crear un indej xtml un appjs vincularlo, p vacio y boton q diga random dato de gato q cuandolhaga click me llene el p con la data

const pEl = document.querySelector(".parrafo");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    obtenerDatosDeGatos();
})

async function obtenerDatosDeGatos(){
    const res = await fetch("https://meowfacts.herokuapp.com/");
    if (res.ok){
       const {data} = await res.json();
       console.log(data);
        pEl.textContent = data[0];
    } else{
        console.log("todo mal");
    }
}

// otra opcion 

const $pData = document.querySelector(".parrafo");
const $btnRandom = document.querySelector(".btn");
const API_URL = "https://meowfacts.herokuapp.com/";

async function addTextToP(){
    $pData.innerText = await getDato();
}

$btnRandom.addEventListener("click", addTextToP);

async function getDato(){
    const res = await fetch(API_URL);
    const { data } = await res.json();
    return data[0];
}

// terc opc

$btnRandom.addEventListener("click",  () => {
    fetch(API_URL)
        .then((r) => r.json())
        .then(({data}) => {
            $pData.innerText = data[0];
        });
});