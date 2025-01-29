
// Função para validar o número do cartão de crédito usando o algoritmo de Luhn
function validarNumeroCartao(numero) {
  const reverso = numero.split("").reverse();
  let soma = 0;

  for (let i = 0; i < reverso.length; i++) {
    let digito = parseInt(reverso[i], 10);

    if (i % 2 !== 0) {
      digito *= 2;
      if (digito > 9) {
        digito -= 9;
      }
    }

    soma += digito;
  }

  return soma % 10 === 0;
}

// Função para identificar a bandeira do cartão
function identificarBandeira(numero) {
  const regexes = {
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard: /^5[1-5][0-9]{14}$/,
    amex: /^3[47][0-9]{13}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
    enroute: /^(2014|2149)\d{11}$/,
    voyager: /^8699[0-9]{11}$/,
    hipercard: /^(38[0-9]{17}|60[0-9]{14})$/,
    aura: /^50[0-9]{14,17}$/,
  };

  for (const [bandeira, regex] of Object.entries(regexes)) {
    if (regex.test(numero)) {
      return bandeira;
    }
  }

  return "Desconhecida";
}

// Função principal para validar e identificar a bandeira do cartão
function validarEIdentificarCartao(numero) {
  if (!validarNumeroCartao(numero)) {
    return { valido: false, bandeira: null };
  }

  const bandeira = identificarBandeira(numero);
  return { valido: true, bandeira: bandeira };
}

// Função para exibir os resultados de forma organizada
function exibirResultado(numero) {
  const resultado = validarEIdentificarCartao(numero);
  console.log("=================================");
  console.log("       Resultado do Cartão       ");
  console.log("=================================");
  console.log(`Número do Cartão: ${numero}`);
  console.log(`Cartão válido  : ${resultado.valido ? 'Sim' : 'Não'}`);
  console.log(`Bandeira       : ${resultado.bandeira}`);
  console.log("=================================\n");
}

// Exemplo de uso
const numerosCartao = [
  "5326302589668751",
  "4532673381866741",
  "345857633767972",
  "38132432532585",
  "6011984437584641",
  "3514434239419025",
  '214900868983019',
  '869945009947462',
  '6062826134689520',
  '5080168490858344',
];

numerosCartao.forEach((numero) => exibirResultado(numero));
