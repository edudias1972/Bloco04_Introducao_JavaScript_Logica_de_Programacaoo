/*Objetos
Você já aprendeu que as variáveis em JavaScript são recipientes ou containers para os dados. Por exemplo:
*/
//let car = "Fiat";
//console.log(car);
/*
Agora é hora de aprender sobre objetos!
Um objeto em JavaScript é uma entidade independente, com propriedades e tipos. 
Uma propriedade é a associação entre uma chave e um valor, são essas as características do objeto.
Pense em um objeto da vida real, como o carro do exemplo acima. 
Cada carro tem sua cor, peso, tamanho, quantidade de portas e etc. 
Essas são suas características, suas propriedades. 
E, da mesma forma que funciona um objeto da vida real, funcionam os objetos em JavaScript.
Veja o vídeo abaixo para entender melhor o conceito de objetos:
*/

let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
};

console.log(car.type);

console.log(car[type]);
/*
Para acessar as chaves dentro de um objeto, temos duas formas:
notação de ponto: car.type
notação de colchetes: car[type]
Se o objeto está dentro de um array, ele é acessado através do seu índice, 
da mesma forma que se acessaria uma informação num array de strings. 
As chaves de um objeto são armazenadas como strings e, 
para conseguir acessar propriedades nomeadas com números, como 0, 
por exemplo, só é possível usando a notação de colchetes. 
Se você usar a notação de ponto, um erro será retornado. 

Ao usar a notação de colchetes também é possível chamar variáveis que 
fazem relação com a chave que você quer acessar dentro desses colchetes.
As chaves de um objeto são armazenadas como strings e, para conseguir acessar propriedades 
nomeadas com números, como 0, por exemplo, só é possível usando a notação de colchetes. 
Se você usar a notação de ponto, ocorre um erro. Ao usar a notação de colchetes também 
é possível chamar variáveis que fazem relação com a chave que você quer acessar dentro desses colchetes.
*/

let diasDaSemana = {
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
};

//diasDaSemana .1; // SyntaxError: Unexpected number
console.log(diasDaSemana['1']); // domingo