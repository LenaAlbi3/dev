const person1 = {
    nombre: "joe",
    apellido: "doe",
}

const person2 = {
    nombre: "jane",
    apellido: "doe",
}

const person3 = {
    nombre: "john",
    apellido: "doe",
}


const persons = [person1, person2, person3];

const response = {
    status: 200,
    message: "OK",
    data: persons,
};

console.log(response);

// let numbers = [0, 1, 2, 3, 4, "pepe"];

numbers.pop(); // elimina el ultimo elemento y se pierde para siempre, si igualo una var al pop se guarda la info en caso de q necesite guardarla

numbers.shift(); // elimina el primer elemento

numbers.unshift(-1); // agrega al principio

numbers.push(5); // agrega al final

console.log(numbers[3]); // se accede con el numero de indice
console.log(numbers.at(2)); // funciona igual q el indice
console.log(numbers.at(-1)); // util para acceder al numero en la ult posicion cuando se desconoce el largo del array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.slice(4, -2));

for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    console.log(element);
}

// parecido al foreach

for (const element of numbers) {
    console.log(element);
}

// for in esta pensado solo para objetos, funciona igual q el for of pero en objetos

for (let i in numbers) {
    console.log(numbers[i]);
}
