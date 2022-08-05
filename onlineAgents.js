const objeto = {
    "type": "application/vnd.lime.collection+json",
    "resource": {
        "total": 7,
        "itemType": "application/vnd.iris.desk.attendant+json",
        "items": [{
            "identity": "ascoop%40unimedmaceio.com.br@blip.ai",
            "fullName": "Recepção Ascoop",
            "email": "ascoop@unimedmaceio.com.br",
            "teams": ["Recepção Ascoop", "Default", "Samara Rocha", "Renata Vasconcelos", "Sonaly Lisboa"],
            "status": "Offline",
            "agentSlots": 10,
            "isEnabled": true
        }, {
            "identity": "carlos.araujo%40unimedmaceio.com.br@blip.ai",
            "fullName": "Carlos Henrique Oliveira Araújo",
            "email": "carlos.araujo@unimedmaceio.com.br",
            "teams": ["Default"],
            "status": "Online",
            "isEnabled": true
        }, {
            "identity": "lucas.rodrigues%40unimedmaceio.com.br@blip.ai",
            "fullName": "Lucas Rodrigues da Nova Ramos",
            "email": "lucas.rodrigues@unimedmaceio.com.br",
            "teams": ["Teste - DTI"],
            "status": "Offline",
            "isEnabled": true
        }, {
            "identity": "renata.vasconcelos%40unimedmaceio.com.br@blip.ai", //3
            "fullName": "Renata da Cruz Vasconcelos",
            "email": "renata.vasconcelos@unimedmaceio.com.br",
            "teams": ["Renata Vasconcelos", "Default"],
            "status": "Offline",
            "agentSlots": 10,
            "isEnabled": true
        }, {
            "identity": "samara.rocha%40unimedmaceio.com.br@blip.ai", //4
            "fullName": "Samara Rocha Arruda",
            "email": "samara.rocha@unimedmaceio.com.br",
            "teams": ["Samara Rocha", "Default"],
            "status": "Offline",
            "agentSlots": 10,
            "isEnabled": true
        }, {
            "identity": "sonaly.lisboa%40unimedmaceio.com.br@blip.ai", //5
            "fullName": "Sonaly Rouse Lisboa Nunes",
            "email": "sonaly.lisboa@unimedmaceio.com.br",
            "teams": ["Sonaly Lisboa", "Default"],
            "status": "Offline",
            "agentSlots": 10,
            "isEnabled": true
        }, {
            "identity": "thiago.tenorio%40unimedmaceio.com.br@blip.ai", //6
            "fullName": "Thiago Tenorio Lopes",
            "email": "thiago.tenorio@unimedmaceio.com.br",
            "teams": ["Recepção Ascoop", "Default"],
            "status": "Offline",
            "agentSlots": 10,
            "isEnabled": true
        }]
    },
    "method": "get",
    "status": "success",
    "id": "e3144507-13fb-4817-84bb-d1f5e8e1730c",
    "from": "postmaster@desk.msging.net/!iris-hosted-7",
    "to": "cooperados1@msging.net/!iris-hosted-7-01p07mer",
    "metadata": {
        "#command.uri": "lime://cooperados1@msging.net/attendants",
        "uber-trace-id": "d178342f2bbb2315%3Af8376f5d7c05794a%3Ad178342f2bbb2315%3A1"
    }
};


function testando(obj) {
    let agents = obj.resource.items.map(function (object, index) {
        return (`${index}, ${object.status}`);
    });
    return agents;
}

//console.log(testando(objeto));


function positionAgent(obj, pos) {
    let position = obj.resource.items[pos].status;

    return position;
}

// Função que recebe como parâmetro o código da analista e retorna a posição do agente no array;
function positionIdentifier(cstCodigo) {
    if (cstCodigo == 2) { //Renata
        return 3 //Posição do agente no Objeto.
    } else if (cstCodigo == 3) { //Samara
        return 4 //Posição do agente no Objeto.
    } else if (cstCodigo == 8) { //Sonaly
        return 5 //Posição do agente no Objeto.
    } else {
        return 100
    }
};

// Função que recebe como parâmetro a posição do primeiro atendente online no array e retorna o cstCodigo para definir a regra de atendimento;
function positionConvert(position) {
    if (position == 3) { //Renata
        return 2 //cstCodigo do agente na REQUEST
    } else if (position == 4) { //Samara
        return 3 //cstCodigo do agente na REQUEST
    } else if (position == 5) { //Sonaly
        return 8 //cstCodigo do agente na REQUEST
    } else {
        return 100
    }
};

//console.log(positionAgent(objeto, 3));

function availabilityAgents(obj) {
    const agents = obj.resource.items.map(function (object) {
        return object.status;
    });
    const positionAgent = agents.findIndex(element => element == 'Online');
    if (positionAgent == -1) {
        return 0;
    }
    return positionAgent;
}

// console.log(run(objeto));
// console.log(positionAgent(objeto, 3));
// console.log(positionIdentifier(objeto));
 console.log(availabilityAgents(objeto));


const arr = ['Lucas', 'Luan', 'Glaubya'];

arr[1] = 'Miguel';

//console.log(arr);

function run(input) {
    let cpf = input;
    let regex = /\d/g;
    let transformCpf = cpf.match(regex);
    console.log(transformCpf);
    //transformCpf.join('');
    // transformCpf = Number (transformCpf);
    // console.log(typeof transformCpf);

    if (isNaN(transformCpf) == true) {
        return '0';
    } else if (transformCpf.length != 11) {
        return 'Diferente de 11';
    } else {
        return 'Ok'
    }
};

//console.log(run('068.380.505-36'));

function teste(userType) {
    let userTypeLower = userType.toLowerCase();
    if (userTypeLower.includes('beneficiário')) {
      return "client";
    } else if (userTypeLower.includes('cooperado')) {
      return "cooperated";
    } else if (userTypeLower.includes('prestador')) {
      return "clinics";
    } else if (userTypeLower.includes('fornecedor')) {
      return "provider";
    } else {
      return "error";
    }
  };

  //console.log(teste('olá'));
  //transformatedUserType
  //resultWelcomeAgainResponse

  function run(principalMenu){
    let input = principalMenu.toLowerCase();

    if(input.includes('informação') || input.includes('informações')){
        return 'informations';
    }else if(input.includes('serviço')){
        return 'services';
    }else if(input.includes('voltar') || input.includes('retornar')){
        return 'return';
    }else if(input.includes('sair') || input.includes('encerrar')){
        return 'exit';
    }else{
        return 'error';
    }
};

//resultPrincipalMenu

function run(welcomeCDU){
    let input = welcomeCDU.toLowerCase();

    if(input.includes('informações') || input.includes('informacoes') || input.includes('informação') || input.includes('informacao')){
        return 'informations';
    } else if(input.includes('agendamento') || input.includes('agendar')){
        return 'scheduling';
    } else if(input.includes('resultado')){
        return 'result';
    } else if(input.includes('menu')){
        return 'menu';
    } else if(input.includes('voltar') || input.includes('retornar')){
        return 'return';
    } else if(input.includes('sair') || input.includes('encerrar')){
        return 'exit';
    } else{
        return 'error';
    }
};

//resultWelcomeCDU

function run(beneficiaryIdentity){
    let input = beneficiaryIdentity.toLowerCase();

    if(input.includes('unimed')){
        return 'unimed';
    }else if(input.includes('não') || input.includes('nao') || input.includes('particular')){
        return 'notClient';
    }else if(input.includes('voltar') || input.includes('retornar')){
        return 'return';
    }else if(input.includes('menu')){
        return 'menu';
    }else if(input.includes('sair') || input.includes('encerrar')){
        return 'exit';
    } else{
        return 'error';
    }
};

//resultBeneficiaryIdentity

//userTypeCdu -- Categoria

function run(response){
    let input = response.toLowerCase();

    if(input.includes('cartão') || input.includes('cartao')){
        return 'card';
    }else if(input.includes('cpf')){
        return 'cpf';
    }else if(input.includes('voltar') || input.includes('retornar')){
        return 'return';
    }else if(input.includes('menu')){
        return 'menu';
    }else if(input.includes('sair') || input.includes('encerrar')){
        return 'exit';
    }else{
        return 'error';
    }
};

//resultResponse
//dataIdentifier

function email(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  function run(cduAnswer){
    let input = cduAnswer.toLowerCase();

    if(input.includes('laboratório') || input.includes('laboratorio')){
        return 'laboratory';
    }else if(input.includes('ultrasson')){
        return 'ultrasound';
    }else if(input.includes('tomo')){
        return 'tomography';
    }else if(input.includes('raio')){
        return 'lightning';
    }else if(input.includes('mamo')){
        return 'mammography';
    }else{
        return 'error';
    }
};

function run(responsePrincipalMenu){
    let input = responsePrincipalMenu.toLowerCase();

    if(input.includes('info')){
        return 'informations';
    }else if(input.includes('agenda')){
        return 'scheduling';
    }else if(input.includes('result')){
        return 'result';
    }else{
        return 'error';
    }
};

//resultResponsePrincipalMenu

//resultTransformPrincipalMenu

//optionMenuCdu -- Categoria

//resultCduAnswer

function run(resultResponsePrincipalMenu){

    if(resultResponsePrincipalMenu == 'informations'){
        return 'Informações';
    }else if(resultResponsePrincipalMenu == 'scheduling'){
        return 'Agendamento';
    }else if(resultResponsePrincipalMenu == 'result'){
        return 'Resultado';
    }else{
        return 'error';
    }
};