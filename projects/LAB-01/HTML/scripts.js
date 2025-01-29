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

function validarEIdentificarCartao(numero) {
  if (!validarNumeroCartao(numero)) {
    return { valido: false, bandeira: null };
  }

  const bandeira = identificarBandeira(numero);
  return { valido: true, bandeira: bandeira };
}

function validarCartao() {
  let numero = document.getElementById("cardNumber").value;
  numero = numero.replace(/\s+/g, "");
  const resultado = validarEIdentificarCartao(numero);
  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
      <p><strong>Número do Cartão:</strong> ${numero}</p>
      <p><strong>Cartão válido:</strong> ${resultado.valido ? "Sim" : "Não"}</p>
      <p><strong>Bandeira:</strong> ${resultado.bandeira}</p>
  `;
}
