const visitante = prompt('Hola ¿Cuál es tu nombre?');

alert(`Sea bienvenido ${visitante}`);

document.getElementById('saludo').innerHTML += 'Bienvenido ' + visitante;