/**
 * Conversion de unidades, de metros, yardas, pies y pulgadas.
 * @method cambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return Valor que retorna
 */

function cambiarUnidades (id, valor){
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
    }
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

function calcularSuma(){
    var num1, num2;

    num1 = Number(document.getElementsByName("sum_num1")[0].value);
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = num1 + Number(num2);

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