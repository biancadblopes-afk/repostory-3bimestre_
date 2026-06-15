//function = function(função) ou procedure(procedimento) do pascal
//{ = BEGIN do pascal
//} = END do pascal
//let = var do pascal
function calcular(){
    let num1 = document.getElementById('edtnum1').value;
    let num2 = document.getElementById('edtnum2').value;
    console.log(num1);
    console.log(num2);
    
    let sub = num1 - num2;
    console.log('Subtração = '+ sub);

    let mult = num1 * num2;
    console.log('Multiplicação = '+ mult);

    let adic = num1 + num2;
    console.log('Adição = '+ adic);

    let divi = num1 / num2;
    console.log('Divisão = '+ divi);
}