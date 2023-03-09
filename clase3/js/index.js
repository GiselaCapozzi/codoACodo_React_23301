const nombre = prompt('Ingrese su nombre a continuacion: ');

const visitante = document.getElementById('visitante');

if (nombre === null || nombre === '') {
    visitante.innerHTML = 'No ingreso su nombre';
} else {
    visitante.innerHTML += nombre;    
}