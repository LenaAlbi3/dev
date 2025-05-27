// asincronismo

function obtenerDatosDeGatos(){
    fetch("https://meowfacts.herokuapp.com") // devuelve promesa pero no garantiza q este resuelta
    .then((res) => {
        if (res.ok){
            // cosas con esa response
            return res.json();
        } else {
            console.log("Todo mal");
            return;
        }
    })
    .then((data) => console.log(data));
}

// para usar await dentro de funcion se necesita la palabra async antes de funcion
// se usa cuando necesitas hacer tareas asincronas paso a paso, cadena consecuente
// espera a q se resuelva promesa para poder seguir con otra cosa, no se ejecuta de una
// cuando no usarlo: paralelismo de peticiones. hacer varias peticiones en paralelo

async function obtenerDatosDeGatos(){
    const res = await fetch("https://meowfacts.herokuapp.com");
    if (res.ok){
       const data = await res.json();
    console.log(data); 
    } else{
        console.log("todo mal");
    }
    
}

obtenerDatosDeGatos();

// top level await
// queda la estructura fuera de una funcion
// incluimos mostrar el tiempo que tarda en cargar

console.time("Tiempo carga")
const res = await fetch("https://meowfacts.herokuapp.com");
if (res.ok){
    const data = await res.json();
 console.log(data); 
 } else{
     console.log("todo mal");
 }
 console.timeEnd("Tiempo carga")

// funcion para varias peticiones

async function getMany() {
   console.time("Tiempo carga");
    let res1 = await fetch("https://meowfacts.herokuapp.com");
    let data1 = await res1.json();
    console.log(data1);

    let res2 = await fetch("https://meowfacts.herokuapp.com");
    let data2 = await res2.json();
    console.log(data2);

    let res3 = await fetch("https://meowfacts.herokuapp.com");
    let data3 = await res3.json();
    console.log(data3);

    console.timeEnd("Tiempo carga");
}


// promesa

console.time("Tiempo carga")
fetch("https://meowfacts.herokuapp.com")
.then((res) => res.json())
.then((data));
 console.timeEnd("Tiempo carga");

// paralelismo de promesas tarda menos tiempo
// si falla una falla todo, se corrige con el metodo .AllSettled si falla una las demas igual cargan
// los tiempos los ponemos para poder optimizar la pagina

async function getMany(){
    console.time("Tiempo carga");
    fetch("https://meowfacts.herokuapp.com")
        .then((r) => r.json())
        .then((d) => console.log(d));
    fetch("https://meowfacts.herokuapp.com")
        .then((r) => r.json())
        .then((d) => console.log(d));
    fetch("https://meowfacts.herokuapp.com")
        .then((r) => r.json())
        .then((d) => console.log(d));
    console.timeEnd("Tiempo carga");
}

getMany();


// el .json convierte a json
// otra opcion 
async function getMany(){
    console.time("Tiempo carga");
    const promise = fetch("https://meowfacts.herokuapp.com").then((r) => r.json())
    const promise1 = fetch("https://meowfacts.herokuapp.com").then((r) => r.json())
    const promise2 = fetch("https://meowfacts.herokuapp.com").then((r) => r.json())
    const data = await Promise.all([promise, promise1, promise2]).catch(err => console.log(err))
    console.log(data);
    console.timeEnd("Tiempo carga");
}

// publicapis.com apis gratis
