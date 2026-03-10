// ======================
// LOGIN
// ======================

function login(){

let usuario = document.getElementById("usuario");
let senha = document.getElementById("senha");

if(!usuario || !senha) return;

usuario = usuario.value;
senha = senha.value;

if(usuario === "crianca" && senha === "123"){

window.location.href = "menu.html";

}else{

alert("Usuário ou senha incorretos");

}

}


// ======================
// SISTEMA DE DESENHO
// ======================

const canvas = document.getElementById("canvas");

if(canvas){

const ctx = canvas.getContext("2d");

let desenhando = false;

canvas.addEventListener("mousedown", () => {
desenhando = true;
});

canvas.addEventListener("mouseup", () => {
desenhando = false;
ctx.beginPath();
});

canvas.addEventListener("mousemove", desenhar);

function desenhar(event){

if(!desenhando) return;

const corPicker = document.getElementById("cor");

let cor = "#000000";

if(corPicker){
cor = corPicker.value;
}

ctx.strokeStyle = cor;
ctx.lineWidth = 5;
ctx.lineCap = "round";

ctx.lineTo(event.offsetX, event.offsetY);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(event.offsetX, event.offsetY);

}


// ======================
// LIMPAR TELA
// ======================

window.limparTela = function(){

ctx.clearRect(0,0,canvas.width,canvas.height);

}

}