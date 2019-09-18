/*
Altere o exercício anterior de forma que ele informe também se os números são iguais.

INICIO
solicitar numero 1
    solicitar numero 2
    comparar os numeros 
    escrever na tela qual deles é o maior ou se são iguais
FIM
*/



const number1 = parseInt(prompt('Digite o primeiro número, por favor'));

const number2 = parseInt(prompt('Digite o segundo número, por favor'));

if (number1 > number2){
    document.write(`${number1} é maior do que ${number2}`)
}if (number2 > number1){
    document.write(`${number2} é maior do que ${number1}`)
}if (number1 === number2){
    alert(`Você digitou números iguais, hein, amiga?! ${number1}`)
};