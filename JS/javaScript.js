

function insert(num)
{
    
    
    var numero = document.getElementById('calculo').innerHTML;
    var numeroResultado = document.getElementById('resultado').innerHTML;
    
    document.getElementById('resultado').innerHTML = numeroResultado + num;
    document.getElementById('calculo').innerHTML = numero + num;

// function testeal() {
//     alert('ola')
// }



}


// teste numero par

function numeroPar() {
    var calculo = document.getElementById('calculo').innerHTML;

    if (calculo % 2 == 0) {
        
    }
    document.getElementById('calculo').innerHTML = eval(Math.sqrt(calculo));
}
// fim teste par
// teste fatorial
// funcionando
// console.log('antes da função')
function fatorial() {
    var calculo = document.getElementById('calculo').innerHTML;
    let somatorio = 1;
    for (let i= 1; i <= calculo; i++)
    {
        somatorio *=i;
    }  
    // console.log(somatorio);
document.getElementById('calculo').innerHTML = somatorio;
}
        // console.log('depois da função')

// funcionando

function raiz() {
    var calculo = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = eval(Math.sqrt(calculo));
}

function clean()
{
    document.getElementById('calculo').innerHTML = "";
}
function off()
{
    document.getElementById('calculo').innerHTML = "";
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var calculo = document.getElementById('calculo').innerHTML;
    document.getElementById('calculo').innerHTML = calculo.substring(0, calculo.length -1);
}
function calcular()
{
    var calculo = document.getElementById('calculo').innerHTML;
    if(calculo)
    {
        document.getElementById('calculo').innerHTML = eval(calculo);
    }
    else
    {
        document.getElementById('calculo').innerHTML = "Null..."
    }
}

﻿

// teste de funtion 

// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return console.log(1);
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }
//   factorialize(10);
//   console.log("full");
//   console.log(factorialize);

// function factorialize(num) {
//     if (num === 0 || num === 1)
//       return console.log(' return IF Testando aqui ' + 1);
//     for (var i = num + 1; i >= 1; i++) {
//     num *= i;
//     console.log(' for Testando aqui ' + num)
// }
// return console.log(' return Testando aqui ' + num);

// }
//   factorialize(5);

// function testefatorial() {
    

//     let somatorio = 1;
    
//     for (let i= 1; i <= 10; i++){
//         somatorio *=i;
//     } 
    
//     console.log(somatorio)
// }

// testefatorial();