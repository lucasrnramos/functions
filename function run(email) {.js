// function run(email) {
//     var re = /\S+@\S+\.\S+/;
//     return re.test(email);
// }




//console.log(run('lucas@test.com'))



function runner(email){
    var convert = email.toLowerCase();
    return convert
}

//console.log(runner('LucAsRNramos@teste.com'));

function run(userIdentifier) {
    if (userIdentifier.includes('Cartão')){
        return 'card'
    } else if (userIdentifier.includes('CPF')){
        return 'cpf'
    } else {
        return 'error'
    }
};

    //console.log(run('olá'));

    function run(input){
        let cpf = input.toLowerCase();
        let regex = /\d/g;
    
        if(cpf == 'menu'){
            return 'menu';
        }else if(cpf == 'sair' || cpf == 'retornar' || cpf == 'voltar' || cpf == 'encerrar'){
            return 'sair';
        }else if(isNaN(cpf) == true && cpf.length > 11 && cpf.includes('.', '-')){
            let transformCpf = cpf.match(regex);
            let notArray = transformCpf.join('');
            return notArray;
        } else if(isNaN(cpf) == false && cpf.length == 11){
            return cpf;
        }else if(isNaN(cpf) == false && cpf.length != 11){
            return false;
        } else if(isNaN(cpf) == true){
            return false;
        }
    };


function slice(date){
    let day = date.slice(8, 10);
    let month = date.slice(5, 7);
    let year = date.slice(0, 4);

    return `${day}/${month}/${year}`;
}

//console.log(slice('1965-07-15 00:00:00'));
                    //0123456789
//"data_nascimento": "1965-07-15 00:00:00",


function card(input){
    let card = input.toLowerCase();
    let regex = /\d/g;

    if(card == 'menu'){
        return 'menu';
    }else if(card == 'sair' || card == 'retornar' || card == 'voltar' || card == 'encerrar'){
        return 'sair';
    }else if(isNaN(card) == true && card.length > 17 && card.includes('.', '-')){
        let transformCard = card.match(regex);
        let notArray = transformCard.join('');
        return notArray;
    } else if(isNaN(card) == false && card.length == 17){
        return card;
    }else if(isNaN(card) == false && card.length != 17){
        return false;
    } else if(isNaN(card) == true){
        return false;
    }
};

//console.log(card('ggggggggggggggggg'));

function addZeroes(num, len) {
  let numberWithZeroes = String(num);
  let counter = numberWithZeroes.length;
      
  while(counter < len) {
  
    numberWithZeroes = `0${numberWithZeroes}`;
    counter++;
  
    }
  return numberWithZeroes;
};
//console.log(addZeroes(838050536, 11)); // 0000001


function lenCpf(){
    if (lenCpf.length == 10){
        return `0${lenCpf}`;
    } else if(lenCpf.length == 9){
        return `00${lenCpf}`
    } else if(lenCpf.length == 11){
        return lenCpf;
    } else {
        return 'error'
    }
};

function welcome(welcomeCDU){
    let welcomeCDUlower = welcomeCDU.toLowerCase();

    if(welcomeCDUlower.includes('informações')){
        return 'informations';
    } else if(welcomeCDUlower.includes('agendamento')){
        return 'scheduling';
    } else if(welcomeCDUlower.includes('resultados')){
        return 'result';
    } else if(welcomeCDUlower.includes('menu')){
        return 'menu';
    } else {
        return 'error'
    }
};

//console.log(welcome('Quero Obter '));

function chosenService(chosenService) {
    let service = chosenService.toLowerCase();

    if(service.includes('sede')){
        return 'administrative';
    } else if(service.includes('diagnóstico')){
        return 'diagnosticCenter';
    } else if(service.includes('médico')){
        return 'medicalCenter';
    } else {
        return 'error';
    }
  };

  //console.log(chosenService('Centro de Diagnósticos'));

function services(principalMenu){
    let input = principalMenu.toLowerCase();

    if(input.includes('reembolso')){
        return 'refund';
    } else if(input.includes('fatura') || input.includes('boleto')){
        return 'ticket';
    } else if(input.includes('cartão') || input.includes('cartao')){
        return 'card';
    } else if(input.includes('autorização') || input.includes('autorizações') || input.includes('autorizacao') || input.includes('autorizacoes') || input.includes('autorizar')){
        return 'autorization';
    } else if(input == 'planos'){
        return 'plans';
    } else if(input.includes('telefones')){
        return 'phone';
    } else if(input.includes('documentos')){
        return 'document';
    } else if(input.includes('processo')){
        return 'process';
    } else if(input.includes('mudança') || input.includes('mudar')){
        return 'alterPlan';
    } else if(input.includes('atendimento') || input.includes('atendente')){
        return 'attendant';
    } else if(input.includes('menu')){
        return 'menu';
    } else if(input.includes('sair') || input.includes('encerrar')){
        return 'exit';
    } else if(input.includes('retornar') || input.includes('voltar')){
        return 'return';
    } else{
        return 'error';
    }
};

//console.log(services('falar com atendente'));
//principalMenuSede -- CATEGORIA
//resultPrincipalMenu -- VARIÁVEL

function run(input){
    let card = input.toLowerCase();
    let notSpace = card.replace(/\s/g, '');
    let regex = /\d/g;

    if(notSpace == 'menu'){
        return 'menu';
    }else if(notSpace == 'sair' || notSpace == 'retornar' || notSpace == 'voltar' || notSpace == 'encerrar'){
        return 'exit';
    }else if(isNaN(notSpace) == true && notSpace.length > 17 && notSpace.includes('.', '-', ' ')){
        let transformCard = notSpace.match(regex);
        let notArray = transformCard.join('');
        return notArray;
    } else if(isNaN(notSpace) == false && notSpace.length == 17){
        return notSpace;
    }else if(isNaN(notSpace) == false && notSpace.length != 17){
        return false;
    } else if(isNaN(notSpace) == true){
        return false;
    }
};

//onsole.log(test('0065 001000591105 4'));

function change(change){
    let input = change.toLowerCase();

    if(input.includes('confirm') || input.includes('sim') || input.includes('correto')){
        return true;
    } else if(input.includes('altera') || input.includes('muda')){
        return false;
    } else{
        return 'error';
    }
};

console.log(change('Mudar'));
