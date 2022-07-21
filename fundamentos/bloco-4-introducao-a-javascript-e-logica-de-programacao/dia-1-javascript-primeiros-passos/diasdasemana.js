/*
Crie uma variável chamada "weekDay" que recebe a string "quarta-feira".
Implemente condicionais para que:
Se nossa variável "weekDay" 
for "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira", 
imprima "Oba, mais um dia de aprendizado na Trybe >:D".
Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU".
Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. 
Esse assunto é muito importante para seu aprendizado :).
*/

let weekDay = 'quarta-feira';
let message;

if (weekDay == 'segunda-feira') {
    message = "Oba, mais um dia de aprendizado na Trybe >:D";

} else if (weekDay == 'terca-feira') {
    message = "Oba, mais um dia de aprendizado na Trybe >:D";

} else if (weekDay == 'quarta-feira') {
    message = "Oba, mais um dia de aprendizado na Trybe >:D";

} else if (weekDay == 'quinta-feira') {
    message = "Oba, mais um dia de aprendizado na Trybe >:D";

} else if (weekDay == 'sexta-feira') {
    message = "Oba, mais um dia de aprendizado na Trybe >:D";
} else {
    message = "FINALMENTE, descanso merecido UwU";
}
console.log(message);

console.log((2 + 2) === 4); //comparando valor e tipo

console.log(!(2 + 2) === 4); // negando ! a igualdade das operações