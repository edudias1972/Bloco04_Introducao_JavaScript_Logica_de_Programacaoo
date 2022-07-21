/*
aula01.js

Abra o seu VS Code e faça os exercícios a seguir:
*Dica: Com o plugin Code Runner que vimos no vídeo você pode 
executar o seu código no VS Code com o atalho ctrl + alt + n. 
Aqui você encontra mais sobre o Code Runner e sobre outras 
extensões úteis para o VS Code!
Crie uma constante chamada myName e atribua
a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity 
e atribua a ela a sua cidade natal.
Crie uma variável chamada birthYear 
e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir 
as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. 
Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. 
Faça um console.log(birthCity) novamente! 
Você saberia explicar por que recebemos uma mensagem de erro? 🤔
/ * Ocorreu uma exceção: TypeError: Assignment to constant variable.*/
//Resposta const birthYear = 1972; Ocorreu uma exceção: TypeError: Assignment to constant variable.
// Avariavel constante const não pode ter ser valor alterado 
const myName = 'Carolina';
const birthCity = 'Porto Alegre';
let birthYear = 1972;
birthYear = 2030;
console.log("Name:" + " " + myName + "  City: " + birthCity + "  Year:" + birthYear);