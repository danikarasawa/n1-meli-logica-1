/*
Solicite que o usuário digite um número. Informe então se este número é par ou ímpar.

INICIO 
    solicite um número
    divida por 2, o resto tem que ser 0
    mostre ao usuário se o número é par ou ímpar
FIM
*/

const number = parseInt(prompt('Digite um número, por favor'));

if(number % 2 == 0){
    document.write(`${number} é um número par`)
}else{
    document.write(`${number} é um número ímpar`)
};