/*function run(horaInicio) {

	let response = horaInicio;
	let horarios = response.substring(11)
		

	return horarios
}

console.log(run('2022-04-12 07:30:00'));*/




function run(appointments) {
    let response = JSON.parse(appointments);
    let nomeMedicos = response.data.map(function(prestador, index){
        return (`${index + 1}. ${prestador.psv_trat.replace('.', ' ')} ${prestador.psv_nome}\n`)
        });
    nomeMedicos = nomeMedicos.join('')
    return nomeMedicos.length > 0 ? nomeMedicos : "No momento não possuímos agenda para profissionais dessa especialidade!"  
}