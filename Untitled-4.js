const sum = (n1, n2) => n1 * n2;


console.log(sum(4, 2));


function run(appointments) {
    let response = JSON.parse(appointments);
    let nomeMedicos = response.data.map(function(prestador, index){
        return (`${index + 1}. ${prestador.psv_trat.replace('.', ' ')} ${prestador.psv_nome}\n`)
        });
    nomeMedicos = nomeMedicos.join('')
    return nomeMedicos.length > 0 ? nomeMedicos : "No momento não possuímos agenda para profissionais dessa especialidade!"  
}

const run = (appointments) => {
    let response = JSON.parse(appointments);
    let horaini = response.data.map(function(){
        
    })
}

function run(client){

    if(client == 'Unimed Maceió' || client == 'Unimed Maceio' || client == 'unimed maceio' || client == 'unimed maceió'){
        return 'Cliente Unimed Maceió'
    } else {
        return 'Cliente Intercâmbio'
    }
}

console.log(run('unimed maceio'));

function run(card) {
  if (card < 17) {
    return "Por favor, digite todos os 17 dígitos de seu cartão Unimed";
  } 
}

console.log(run(1234567845));
