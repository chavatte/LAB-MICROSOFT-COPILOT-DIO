## LAB-01: Criando um Validador de Bandeiras de Cartão de Crédito com o GitHub Copilot

## Descrição

Este projeto demonstra como usar o GitHub Copilot para criar um validador de bandeiras de cartão de crédito. O validador possui duas partes:

* **Interface HTML:** Permite que o usuário insira o número do cartão de crédito e visualize o resultado da validação e a bandeira do cartão.
* **Validação em Node.js:** Implementa a lógica de validação do número do cartão (algoritmo de Luhn) e a identificação da bandeira do cartão.

## Tecnologias

* HTML
* CSS
* JavaScript
* Node.js
* GitHub Copilot

## Como executar

### Interface HTML

1. Abra o arquivo `HTML/index.html` no seu navegador, ou se preferir, [clique aqui para ver online](https://chavatte.github.io/LAB-MICROSOFT-COPILOT-DIO/projects/LAB-01/HTML/)
2. Insira o número do cartão de crédito no campo de entrada.
3. Clique no botão "Validar".
4. O resultado da validação e a bandeira do cartão serão exibidos na tela.

### Validação em Node.js

1. Abra o terminal e navegue até a pasta `src`.
2. Execute o comando `node index.js`.
3. O script irá validar uma lista de números de cartão de crédito e exibir os resultados no terminal.

## Observações

* Os números de cartões gerados pelo site [Gerador de Números de Cartão de Crédito para Teste](https://www.4devs.com.br/gerador_de_numero_cartao_credito) são inválidos e servem apenas para testes.
* Este projeto foi desenvolvido com a ajuda do GitHub Copilot. As sugestões do Copilot foram revisadas e adaptadas para garantir a qualidade e a funcionalidade do código.