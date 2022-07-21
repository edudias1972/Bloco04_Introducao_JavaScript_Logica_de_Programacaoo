/*
5)Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

let soma = angulo1 + angulo2 + angulo3;

if (soma === 180) {
    console.log("Triangulo Perfeito", true);
} else {
    console.log("Angulo invalido", false);
}