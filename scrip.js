// MOSTRAR Y OCULTAR CONTENIDO
// ------------------------*/ 

function Ocultar(texto)
{
vista=document.getElementById(texto).style.display;
if (vista=='none')
vista='block';
else
vista='none';
document.getElementById(texto).style.display = vista;
}