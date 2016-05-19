var area = 0;
var nombre = "luis";
var bandera = true;

//alert(nombre);

function areaRectangulo(base, altura) {
    area = base * altura;
    document.getElementById("alert").innerHTML="<h2>El area es:<span style='color:red'>"+area+"</span></h2>";

}

function suma(a,b){
    var total = a+b;
    return total;
}

function total(){
    alert("la suma es: "+suma(20,5));
}

function obtenerDatos(id,name,value){
    alert("id: "+id+"\nName: "+name+"\nValue: "+value)
}

//usando la funcion confirm
function pregunta(){
   var respuesta = confirm("¿tegusto el tema de hoy?");

     var alerta = respuesta ? alerta=alert("A ud le gusto el tema de hoy"):alerta=alert("A ud no le gusto el tema de hoy");
    alerta();
   /*if(respuesta){
       alert("A ud le gusto el tema de hoy");
   } else{
       alert("A ud no le gusto el tema de hoy");
   }*/
       }
//funcion anonima
var mensaje = function(){
    alert("hello world")
}

var saludo=mensaje;

//cambiar nombre botton
var changeValue = function(){
    document.getElementById("change").value = "He cambiado";

}
