/*
3)Faça um programa que retorne o maior de três números. 
Defina no começo do programa três constantes com os valores que serão comparados.
*/

const num1 = 112;
const num2 = 222;
const num3 = 1000;

if (num1 > num2 && num1 > num3) {
    console.log("O numero Maior é:", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("O numero Maior é:", num2);
} else {
    console.log("O numero Maior é:", num3);
}