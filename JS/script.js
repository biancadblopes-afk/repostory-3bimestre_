//function = function(função) ou procedure(procedimento) do pascal
//{ = BEGIN do pascal
//} = END do pascal
//let = var do pascal
function calcular(){
    let resultado = document.getElementById('resultado');
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    resultado.innerHTML = '';

    let adic = Number(num1) + Number(num2);
    console.log('Adição = '+ adic);
    resultado.innerHTML += '<h3>Soma = '+adic+'</h3>';

    let sub = Number(num1) - Number(num2);
    console.log('Subtração = '+ sub);
    resultado.innerHTML += '<h3>Subtração = '+sub+'</h3>';

    let mult = Number(num1) * Number(num2);
    console.log('Multiplicação = '+ mult);
    resultado.innerHTML += '<h3>Multiplicação = '+mult+'</h3>';

    let divi = Number(num1) / Number(num2);
    console.log('Divisão = '+ divi);
    resultado.innerHTML += '<h3>Divisão = '+divi+'</h3>';
}

function exibirTabuada(){
    let mostratabuada = document.getElementById('mostratabuada');
    let numero = document.getElementById('edtnumero').value;
    let i = 0;
    
    while(i<=10){
        mostratabuada.innerHTML += '<h4>'+numero+' x '+i+' = '+(numero*i)+'</h4>';    
        i++;//cont:cont+1 i=i+1
    }
}

function verificaMaior() {
    let n1 = document.getElementById('edtnum3').value;
    let n2 = document.getElementById('edtnum4').value;
    let maiornumero = document.getElementById('maiornumero');
    maiornumero.innerHTML = '';

    if (n1>n2){
        maiornumero.innerHTML = '<h2>O maior número digitado é '+n1+'</h2>';
    } else {
        maiornumero.innerHTML = '<h2>O maior número digitado é '+n2+'</h2>';
    }
}