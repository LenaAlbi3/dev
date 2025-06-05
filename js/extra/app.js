const persona = {
    nombre: "Juan",
    apellido: "Perez",
    apodo: "El dios de la programacion",
};

// clase estatica
// 3 metodos para transformar objeto a array
console.log(Object.values(persona));
console.log(Object.keys(persona));
console.log(Object.entries(persona));

// congelar objeto para q no se pueda modificar
const TYPES = Object.freeze({
    admin: "ADMIN",
    user: "USER",
})

// sirve para simular enums
// viene para satisfacer la necesidad de magic strings, magic numbers

if(variable == TYPES.admin){

}
// descubrir si obj tiene x clase
console.log(Object.hasOwn(persona, "edad"))

// investigar mas propiedades de object.
