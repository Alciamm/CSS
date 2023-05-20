let user = prompt('Ingrese el usuario: ');
if (user == 'Admin') 
{
    let pass = prompt('Ingrese una contraseña: ');
    if (pass == 'TheMaster') 
    {
        alert(`Bienvenido!`)
    } else{
        alert('Contraseña Incorrecta')
    }
} 
else if(user == '' || user == null) 
{
    alert('Cancelado')
} else {
    alert('No te conozco')
}
