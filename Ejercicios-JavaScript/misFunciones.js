/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return Valor que retorna
 */

function cambiarUnidades (id, valor){
    var metro, pulgada, pie, yarda;
    if (valor.includes (",")){
        valor = valor.replace(",",",");
    }

    if(isNan(valor)){
        alert("Se ingreso un valor invalido")
        document.lasUnidades.unid_metro.value = " ";
        document.lasUnidades.unid_pulgada.value = " ";
        document.lasUnidades.unid_pie.value = " ";
        document.lasUnidades.unid_yarda.value = " ";
    }   else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value = 1.0936*value;
    }   else if (id=="pulgada"){
        document.lasUnidades.unid_metro.value = 0.0254*valor;
        document.lasUnidades.unid_pie.value = 0.08333*valor;
        document.lasUnidades.unid_yarda.value = 0.2777*value;
    }   else if (id=="yarda") {
        document.lasUnidades.unid_metro.value = 0.9144 * valor;
        document.lasUnidades.unid_pie.value = 3 * valor;
        document.lasUnidades.unid_pulgada.value = 36 * value;
    }   else if (id=="pie") {
        document.lasUnidades.unid_metro.value = 0.3048 * valor;
        document.lasUnidades.unid_yarda.value = 0.3333 * valor;
        document.lasUnidades.unid_pulgada.value = 12 * value;
    }
    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_yarda.value = Math.round(yarda*100)/100;
    document.lasUnidades.unid_pie.value = Math.round(pie*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
}

function convertirGR(id){
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }   else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }
    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}

function mostrar_ocultar (valorMC){

    if (valorMC=="val_mostrar"){
        document.getElementById("divMO").style.display = "block";
    }   else if (valorMC=="val_ocultar"){
        document.getElementById("divMO").style.display = "none";
    }
}


function calcularSuma(){
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].innerHTML = num1 + Number(num2);

}

function calcularResta(){
    var num1, num2;

    num1 = Number(document.getElementsByName("res_num1")[0].value);
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = num1 - Number(num2);

}
function calcularMultiplicacion(){
    var num1, num2;

    num1 = Number(document.getElementsByName("mul_num1")[0].value);
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = num1 * Number(num2);

}
function calcularDivision(){
    var num1, num2;

    num1 = Number(document.getElementsByName("div_num1")[0].value);
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = num1 * Number(num2);

}

function cargarWeb(){
    var cant, unidad, urlComp;

    cant = document.getElementById("distancia").value;
    unidad = document.getElementById("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cant + "#" + unidad;
    window.open(urlComp);
}

function cargarResultado(){
    var urlComp, can, un;

    urlComp = window.location.href.split("/")[5];

    can = urlComp.split("#")[1];
    un = urlComp.split("#")[2];

    document.getElementById("dist").value = can + " " + un;
}

function dibujarImagen (posX, posY){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, posX, posY)
    }
}

x=0;
dx=2;

function animarAuto(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;

    var img = new image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, x, 100)
    }

    if(x>canvas.width){
        x=0;
    }
    x+=dx;
}

function guardarLocalStorage(){
    let distancia, unidad;
    distancia = document.getElementById("distancia").value;
    unidad = document.getElementById("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadesLS", unidad);
    window.open('2_Web.html');
}

function cargarLocalStorage(){
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadesLS");

    document.getElementById("dist").value = cant + " " + un;
}

function dibujarCirCuad(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#3e67d9";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#3e67d9";
    ctx.fill();

}

var bandera;
function dibujar(event){
    var canvas = document.getElementById("");
    var  ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX, posY);

   canvas.onmousedown = function (){bandera=true};
    canvas.onmousedown = function (){bandera=false};

    if (bandera) {
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }

}

function limpiarCanvas(){
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function dibujarCuadriculado(){
    var canvas = document.getElementById()
    var ctx = canvas.getContext("2d");

    var anchoMax = cavas.widht;
    var alturaMax = canvas.height;

    //dibujar lineas horizontales
    ctx.beginPath();
    for(var i=0; i<alturaMax;){
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke;
        i=i+20;
    }
    ctx.closePath();

    //dibujar lineas verticales
    for(var i=0; i<anchoMax;){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#3e67d9";
        ctx.stroke;
        i=i+20;
    }
    ctx.closePath();

    //eje x
    ctx.beginPath();
    ctx.moveTo(0, alturaMax);
    ctx.lineTo(anchoMax, alturaMax/2);
    ctx.strokeStyle = "#3e67d9";
    ctx.stroke;
    ctx.closePath();

    //eje y
    //eje x
    ctx.beginPath();
    ctx.moveTo(anchoMax/2, 0);
    ctx.lineTo(anchoMax/2, alturaMax/2);
    ctx.strokeStyle = "#3e67d9";
    ctx.stroke;
    ctx.closePath();


}