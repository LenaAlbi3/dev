/* userName = Juan */
localStorage.setItem("userName", "Juan");

/* recuperar nombre */
/*const UserName = localStorage.getItem("userName");
const bodyEl = document.querySelector("body");

const pEL = document.createElement('p');
pEL.innerText = UserName;
bodyEl.appendChild(pEL);
console.log(bodyEl)*/
// console.log(UserName);

/* borrar */

// localStorage.removeItem("userName");
// localStorage.clear();

/*const Usuario = {
  nombre: "Juan",
  edad: 30,
};*/

// const ObjetoATexto = JSON.stringify(Usuario);

// const ObjetoDato = JSON.parse(ObjetoATexto);

// localStorage.setItem("usuario", JSON.stringify(Usuario));

/* traer todo el usuario */

// const DataUser = JSON.parse(localStorage.getItem("usuario"));

// DataUser.nombre;

/* 
    transformar de objeto a string

    JSON.stringify(ObjetoATexto)

    transformar de string a objeto
    
    JSON.parse(ObjetoDato)
*/
const h1El = document.querySelector("h1");

localStorage.clear();

const persona = {
    nombre: "Azara",
    edad: 22,
    ocupacion: "estudiante",
};

localStorage.setItem("persona", JSON.stringify(persona));

// se usa destructurizacion
const { nombre, edad } = JSON.parse(localStorage.getItem("persona"));

h1El.textContent += ` ${nombre} tienes: ${edad} años`;