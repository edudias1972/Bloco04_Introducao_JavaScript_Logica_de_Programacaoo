/*exercicio 1 imprimelistade de numeros.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function imprimeNumbers(numbers) {
    for (const item of numbers) {
        console.log(item);
    }
}
console.log(imprimeNumbers(numbers));

/*Calcula soma do números contidos na array - exercicio 2*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function somaNumbers(numbers) {
    let resultado = 0;
    for (let index = 0; index < numbers.length; index++) {
        resultado = resultado + numbers[index];
    }
    return resultado;
}

console.log(somaNumbers(numbers));

/*Calcular e imprimir á média  exercicio3 */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function mediaNumbers(numbers) {
    let resultado = 0;
    let media = 0;
    for (let index = 0; index < numbers.length; index++) {
        media = media + numbers[index];
        resultado = (media / numbers.length);
    }
    return resultado;
}
console.log(mediaNumbers(numbers));

/*Calcular e imprimir á média   exercicio 4*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

function mediaNumbers(numbers) {
    let resultado = 0;
    let media = 0;
    for (let index = 0; index < numbers.length; index++) {
        media = media + numbers[index];
        resultado = (media / numbers.length);
    }
    if (resultado > 20) {
        console.log("valor maior ou igual a 20");
    } else {
        console.log("valor menor ou igual a 20");
    }
}
console.log(mediaNumbers(numbers));