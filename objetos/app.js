let persona1 = {
    edad: 24,
    nombre: "Jose",
    apellido: "Perez",
    fechaNacimiento: "12/04/2001",
    activo: true,
};

let persona2 = persona1; // binding, enlace, no copias la estructura sino la referencia de memoria, funciona como puntero

console.log("Persona: ", persona1);

persona1.activo = false; // -> setter

console.log(persona1.activo); // -> getter

persona1.id = 156;

delete persona1.activo;

persona2.apellido = "Martinez";

console.log("Persona2: ", persona2);

class Persona{
    #_nombre;
    #_apellido;
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido; // dif entre parametro y propiedad con _ al principio
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

let person = new Persona("Jose", "Perez");

// no existe la privacidad en js, encapsulamiento no sirve de nada como lo aprendimos antes, se hace con un #


let persona = {
    nombre: "juan",
    apellido: "perez",
};

const a = "nombre";

console.log(person[a]);

