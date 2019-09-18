/*
Faça um algoritmo que receba um número e mostre uma mensagem caso este número seja maior que 10.

INICIO
    receber um numero
    se numero > 10
        "Número maior que 10!"
    se nao
        "Número não é maior que 10!"     
FIM
*/

const number = parseInt(prompt("Digite um número, por favor."));

if(number >= 10){
    document.write(`O número ${number} é igual ou maior do que 10. Que linda você, amiga!`)
}else{
    alert(`Nada disso, amiga! O ${number} não faz parte da brincadeira`)
};


