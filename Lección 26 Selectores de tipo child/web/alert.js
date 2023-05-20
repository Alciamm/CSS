let login = prompt("Escribe tu login:");
message = login == 'Empleado' ? "Hola" : 
(login == 'Director') ? 
    "Felicidades" : 
(login == '') ? 
    "Sin sesión" : 
'';
console.log(message);
alert(message);
