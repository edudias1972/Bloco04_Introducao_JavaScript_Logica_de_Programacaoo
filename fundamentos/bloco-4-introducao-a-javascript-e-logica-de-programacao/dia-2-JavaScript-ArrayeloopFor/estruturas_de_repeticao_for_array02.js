/*Entrada Declaração de array*/
let listaDeNomes = ["Joana", "Maria", "Lucas"];
/*for laço de repetição para percorrer a array*/
/** declaração de variavel indice  */
/*teste condicional < menor que o tamanho da lista*/
/**Incremento da variavel */
for (let i = 0; i < listaDeNomes.length; i++) {
    /**Craia uma variavel e concatena o texto array listaDeNomes[i] */
    let mensagem = "Boas vindas, " + listaDeNomes[i] + "!";
    /**Exibe as mensagens geradas  */
    console.log(mensagem);
}
/**Resultado Esperado*/
/*
Boas vindas, Joana!
Boas vindas, Maria!
Boas vindas, Lucas!
*/