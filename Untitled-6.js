/*function run(result) {

    result = JSON.parse(result)

    let hasAttendant = false;



    // Altere o valor da variável para o nome da fila verificada

    let team = 'Samara Rocha';



    if (result.resource && result.resource.total >= 1) {

        hasAttendant = result.resource.items.some(function (attendant) {

            return (attendant.status === 'Online' && attendant.teams.includes(team));

        });

    }

    return hasAttendant;

}*/

const objAttendants = {
  type: "application/vnd.lime.collection+json",
  resource: {
    total: 2,
    itemType: "application/vnd.iris.desk.attendant+json",
    items: [
      {
        identity: "lucas.rodrigues%40unimedmaceio.com.br@blip.ai",
        fullName: "Lucas Rodrigues da Nova Ramos",
        email: "lucas.rodrigues@unimedmaceio.com.br",
        teams: [
          "Samara Rocha",
          "Sonaly Lisboa",
          "Renata Vasconcelos",
          "Default",
        ],
        status: "Pause",
        lastServiceDate: "2022-03-30T18:06:10.940Z",
        isEnabled: true,
      },
      {
        identity: "victorarroxellas01%40gmail.com@blip.ai",
        fullName: "Josué Victor Arroxellas Barbosa",
        email: "victorarroxellas01@gmail.com",
        teams: ["Default"],
        status: "Offline",
        lastServiceDate: "2021-09-21T15:23:38.640Z",
        isEnabled: true,
      },
    ],
  },
  method: "get",
  status: "success",
  id: "29063eeb-c1ce-4b2d-bd5b-e29a21b0e2b7",
  from: "postmaster@desk.msging.net/!iris-hosted-1",
  to: "botteste341@msging.net/iris-hosted-2",
  metadata: {
    $destination: "business.builder.hosting@msging.net/#iris-hosted-2",
    $destinationResolveAliases: "False",
    "#command.uri": "lime://botteste341@msging.net/attendants",
    "uber-trace-id":
      "bedb0375a62d5bc2%3A8b9b7a9b821a4896%3Adafb10eeec5cac79%3A1",
    $internalId: "b5b42dd7-ef92-4524-a073-faf51ce20c59",
    $originatorSessionRemoteNode: "postmaster@desk.msging.net/!iris-hosted-1",
  },
};

function run(obj) {
  const printObj = obj;

  return printObj.resource.itemType;
}

console.log(run(objAttendants));
console.log(run(typeof objAttendants));

function run(cstCodigo) {
  if (cstCodigo == 8) {
    return "CDU - Centro de Diagnóstico Unimed";
  } else if (cstCodigo == 2) {
    return "Centro Médico e Fisioterapia";
  } else if (cstCodigo == 3) {
    return "Atendimento para Prestadores";
  } else if (cstCodigo == 4) {
    return "Fornecedores Hospital Unimed";
  } else {
    return "error";
  }
}

console.log(run(6));

function run(e) {
  let x = e;
  let cnpj = x
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  let cnpjFormat = !cnpj[2]
    ? cnpj[1]
    : cnpj[1] +
      "." +
      cnpj[2] +
      "." +
      cnpj[3] +
      "/" +
      cnpj[4] +
      (cnpj[5] ? "-" + cnpj[5] : "");

  return cnpjFormat;
}

function run(cnpj) {
  if (isNaN(cnpj) === false) {
    let format = cnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    return format;
  } else if (cnpj == "sair" || cnpj == "voltar" || cnpj == "menu") {
    return "redirect";
  } else {
    return "error";
  }
}

console.log(run("02.812.468/0001-06"));

function run(responseCorporateName) {
  if (isNaN(responseCorporateName) == true) {
    let corporateNameUpper = responseCorporateName;

    return corporateNameUpper.toUpperCase();
  } else {
    return "error";
  }
}

console.log(run(899841));

function dataAtualFormatada() {
  var data = new Date(),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? `'0' ${dia}` : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? `'0' ${mes}` : mes,
    anoF = data.getFullYear();
  return `${diaF} '/' ${mesF} '/' ${anoF}`;
}

console.log(dataAtualFormatada("12052022"));
