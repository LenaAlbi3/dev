// dado un array de tareas ({ id, descripcion, completada }),
// devolver un nuevo array donde todas las tareas esten completadas
// (completada: true)

const tareas = [
    { id: 1, descripcion: "estudiar JS", completada: false},
    { id: 2, descripcion: "estudiar para recu", completada: false},
];

const tareasCompletadas = tareas.map(lasTareas => ({
    ...lasTareas,
    completada: true,
}));

console.log("\n==============");

console.log(tareasCompletadas);

console.log("\n==============");

/*
1. filtrar productos en oferta y calcular precios finales

dado un array de productos ({ nombre, precio, descuento }), quedate solo
con los q tengan un descuento mayor a cero. luego calcular el precio
final de cada uno, restando el descuento
*/

const productos = [
    { nombre: "zapatillas", precio: 1200, descuento: 200 },
    { nombre: "remera", precio: 5000, descuento: 0 },
    { nombre: "campera", precio: 2000, descuento: 500 },
];

const productosEnOferta = productosTienda
.filter(
    elProducto => elProducto.descuento > 0
)
.map(
    elProducto => ({
        nombre: elProducto.nombre,
        precio: elProducto.precio - elProducto.descuento,
    })
);

console.log(productosEnOferta);
