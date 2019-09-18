/* Crie um programa que recebe um número inteiro e informa se este número é múltiplo de 10.

INICIO
    solicitar um número
    verificar se ele é múltiplo de 10
    mostrar a resposta para o usuário
FIM
*/

const number = parseInt(prompt('Digite um número, por favor'));

if(number % 10 == 0){
    document.write(`${number} é um múltiplo de 10`)
}else{
    document.write(`${number} não é um múltiplo de 10`)
};