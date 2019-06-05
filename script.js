var nombre; 
var input= document.getElementById("nombre");
var boton= document.getElementById("inicio");
var elegir= document.getElementById("elige");
var hola= document.getElementById("bienvenida");
boton.addEventListener ("click",function(){ 
  nombre= input.value;
  hola.innerHTML += nombre;
  elegir.style.display="block";
  input.style.display = 'none';

});

var javapreguntas = document.getElementById("preguntasjs");preguntasjs.addEventListener("click", irAJs, false);
  function irAJs(){
location.href= "index2.html";
  };

var csspreguntas = document.getElementById("preguntascss");preguntascss.addEventListener("click", irACss, false);
  function irACss(){
location.href= "index3.html";
  };