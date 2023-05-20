let navegador = prompt('¿Qué navegador usas?', '');
if(navegador == 'Edge')
{
    alert('¡Tienes Edge!');
}
else if(navegador == 'Chrome' 
    || navegador == 'Firefox' 
    || navegador == 'Safari' 
    || navegador == 'Opera')
{
    alert('Esta bien, soportamos esos navegadores también');
}
else{
    alert('¡Esperemos que esta página se vea bien!');
}
