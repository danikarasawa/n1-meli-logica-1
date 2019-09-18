/*
Escrever um algoritmo que leia dois valores inteiros distintos e informe qual deles é o maior.

INICIO
    solicitar numero 1
    solicitar numero 2
    comparar os numeros 
    escrever na tela qual deles é o maior 
FIM
*/

const number1 = parseInt(prompt('Digite o primeiro número, por favor'));

const number2 = parseInt(prompt('Digite o segundo número, por favor'));

if (number1 > number2){
    document.write(`${number1} é maior do que ${number2}`)
}else{
    alert(`${number2} é maior do que ${number1}`)
};