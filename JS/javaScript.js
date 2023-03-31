

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

if(calculo % 2 == 0 && calculo !=0){
    document.getElementById('calculo').innerHTML = calculo+ ' é par';
    console.log(calculo+ ' é par')    
}

else{
    document.getElementById('calculo').innerHTML = calculo+ ' não é par';
console.log(calculo+ ' não é par')

}
}
// fim teste par

// numero impar
function numeroImpar() {
    var calculo = document.getElementById('calculo').innerHTML;
    if(calculo % 2 == 1){
        document.getElementById('calculo').innerHTML = calculo+ ' é Impar';
        console.log(calculo+ ' é impar')
        
    }
    else{
        document.getElementById('calculo').innerHTML = calculo+ ' não é impar';
        console.log(calculo+ ' não é impar')
    
}
}
// fim numero impar
// numero primo

function numeroPrimo() {
    var calculo = document.getElementById('calculo').innerHTML;
    
    if(calculo % 2 == 1 && calculo !=1 || calculo == 2){
        document.getElementById('calculo').innerHTML = calculo+ ' é primo';
        // document.write('Primo')
    }
    else{
        document.getElementById('calculo').innerHTML = calculo+ ' não é primo';
        // document.write('Nenhum e nem outro')
    }
}    




// fim numero primo
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

