//Declaração de Variaveis 
const comida = 'pão na chapa';
const bebida = 'cafezinho';
//Criando a função 
function comerBeber(comida, bebida) {
    if (bebida === 'cafezinho' && comida === 'pão na chapa') {
        console.log('Muito obrigado pela refeição :)');
    } else {
        console.log('Acho que houve um engano com meu pedido');
    }
}