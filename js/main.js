// Obtén una referencia a los elementos de radio
var input1 = document.getElementById("blog");
var input2 = document.getElementById("newsletter");
var input3 = document.getElementById("ebook");
var input4 = document.getElementById("copy");

var cont1=document.getElementById("blog-item-1");
var cont2=document.getElementById("blog-item-2");
var cont3=document.getElementById("blog-item-3");
var cont4=document.getElementById("blog-item-4");

// Agrega un controlador de eventos para el evento "click"
input1.addEventListener("click", manejarClic);
input2.addEventListener("click", manejarClic);
input3.addEventListener("click", manejarClic);
input4.addEventListener("click", manejarClic);

// Función para manejar el evento de clic
function manejarClic(evento) {
  var valorSeleccionado = evento.target.value;
  if(valorSeleccionado=="blog"){
    cont1.style.display="block";
    cont2.style.display="none";
    cont3.style.display="none";
    cont4.style.display="none";
  }
  if(valorSeleccionado=="newsletter"){
    cont1.style.display="none";
    cont2.style.display="block";
    cont3.style.display="none";
    cont4.style.display="none";
  }
  if(valorSeleccionado=="ebook"){
    cont1.style.display="none";
    cont2.style.display="none";
    cont3.style.display="block";
    cont4.style.display="none";
  }
  if(valorSeleccionado=="copy"){
    cont1.style.display="none";
    cont2.style.display="none";
    cont3.style.display="none";
    cont4.style.display="block";
  }
}