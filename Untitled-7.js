// function run(number){
//     let tamanho = number
//     if(isNaN(number) && number == 'menu' || number == 'Menu'){
//         return 'menu'
//     } else if (isNaN(number) && number == 'sair' || number == 'Sair' || number == 'encerrar' || number == 'Encerrar' || number == 'finalizar' || number == 'Finalizar' ){
//         return 'sair'
//     } else if (isNaN(number)){
//         return 'Por favor, digite todos os 11 números de seu CPF!'
//     } else if (tamanho.length > 11 || tamanho.length < 11){
//         return 'Por favor, insira os 11 números de seu CPF!'
//     } else {
//         return true
//     }
// };

// function run(refundResponse){
//     let input = refundResponse.toLowerCase();

//     if(input.includes('sair') || input.includes('encerrar') || input.includes('fechar')){
//         return 'exit';
//     }else if(input.includes('voltar') || input.includes('retornar') || input.includes('anterior')){
//         return 'return';
//     }else if(input.includes('sim')){
//         return true;
//     }else if(input.includes('não') || input.includes('nao')){
//         return false;
//     }else{
//         return 'error';
//     }
// };

function run(refundResponse){
    let input = refundResponse.toLowerCase();

    if(input.includes('sair') || input.includes('encerrar') || input.includes('fechar')){
        return 'exit';
    }else if(input.includes('voltar') || input.includes('retornar') || input.includes('anterior')){
        return 'return';
    }else if(input.includes('sim')){
        return true;
    }else if(input.includes('não') || input.includes('nao')){
        return false;
    }else{
        return 'error';
    }
};

console.log(run('fala'));