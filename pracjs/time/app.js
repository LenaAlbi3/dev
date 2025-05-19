const pEl = document.createElement("p");
mainEl.append(pEl);

// ecmascript 6 
const formatTime = (n) => (n < 10 ? "0" + n : n);

setInterval(() => {
    const { dia, mes, numerodia } = getTodayDate();
    const { hora, minutos, segundos } = time;
    pEl.textContent = `Hoy es ${dia}, ${numerodia} de ${mes}, y son las ${hora}:${formatTime(minutos)}:${formatTime(segundos)}`
}, 1000);

function getTodayDate() {
const dias = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
];
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];
// destructuring
return{
    numerodia: fecha.getDate(),
    dia: dias[fecha.getDay()],
    mes: meses[fecha.getMonth()],
    time: {
        hora: fecha.getHours(),
        minutos: fecha.getMinutes(),
        segundos: fecha.getSeconds(),
    },
};
}

