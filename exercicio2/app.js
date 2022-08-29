/************************************************************
Objetivo:        Exibição Tabuada Simples
Autor:           Milena Araujo de Souza
Data de criação: 28.08.2022
Versão:          1.0
*************************************************************/
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

const { validarTabuada, validarContador, calcularTabuada } = require('./exercicio2/exercicio2')

console.log('\n---------- TABUADA SIMPLES ----------')

 entradaDados.question('\nDigite a tabuada inicial (de 2 a 100): ', function(valor){
    let valorTabuadaInicial = parseFloat(valor);
    validarTabuada(valorTabuadaInicial); 

    entradaDados.question('\nDigite a tabuada final (de 2 a 100): ', function(valor){
        let valorTabuadaFinal = parseFloat(valor);
        validarTabuada(valorTabuadaFinal);

        entradaDados.question('\nInsira o operador inicial de 1 a 50: ', function(valor){
            let valorOperadorInicial = parseFloat(valor);
            validarContador(valorOperadorInicial); 

            entradaDados.question('\nInsira o operador final de 1 a 50: ', function(valor){
                let valorOperadorFinal = parseFloat(valor);
                validarContador(valorOperadorFinal); 

                if(valorOperadorInicial > valorOperadorFinal)
                {
                    console.log('\nO contador INICIAL não pode ser maior que o FINAL.')
                    process.exit(1);
                } else
                {
                    calcularTabuada(valorTabuadaInicial, valorTabuadaFinal, valorOperadorInicial, valorOperadorFinal);
                }
            });
        });
    });
});