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


var enviar = function(){
    var valor1=document.getElementById("nombre").value;
     document.getElementById("nombre").value ="";
    document.getElementById("responder").value = valor1;

}

//trafajando con objeto JSON..>

var objetjson = function(){
    var persona = '{"nombres" : "juan", "apellidos":"torre garcia", "pais": "Inglaterra", "edad":37}';
    //JSON.parse(persona) aqui un JSON convierto a un documento javascript
    var objetoJSON = JSON.parse(persona);
    alert(objetoJSON.apellidos);
}



//serializacion a un objeto JSON
var serializacionJSON = function(){
        var datos = new Object();
        datos.nombres = "pepe lucho";
        datos.edad = 83;
        datos.ojos = "blanos";

        var jsonserial = JSON.stringify(datos);
        alert("los datos son: "+jsonserial);
    }

//USANDO PRONT()
//var nombr = prompt("escribe tu nombre");
//alert(nombr);

//UNA FUNCION COSTRUCTOR

function persona(){
    this.nombres="";
    this.apellidos="";

    this.setNombres = function(nombres){
        this.nombres = nombres;

    }

    this.getNombres = function(){
        return this.nombres;

    }

    this.setApellidos = function(apellidos){
        this.apellidos = apellidos;

    }
    this.getApellidos = function(){
        return this.apellidos;

    }
}

Alumno.prototype = new persona();

function Alumno(){
    this.codigo="";
    this.universidad="";

    this.setCodigo = function(codigo){
        this.codigo = codigo;

    }
    this.getCodigo = function(){
       return this.codigo;

    }

     this.setUiversidad = function(universidad){
        this.universidad = universidad;

    }
    this.getUiversidad = function(){
       return this.universidad;

    }

}

var miAlumno = new Alumno();
miAlumno.setNombres("Alis");
miAlumno.setApellidos("Huamanta");
miAlumno.setCodigo("201420581");
miAlumno.setUiversidad("Universidad Peruana Union")

var texto = "el alumno: "+miAlumno.getNombres()+" "+miAlumno.getApellidos()+"\ncon codigo: "+miAlumno.getCodigo()+"\nDe la: "+miAlumno.getUiversidad()

alert(texto)


