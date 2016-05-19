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
