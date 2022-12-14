/************************************************************
Objetivo:        Funções para Tabuada Simples
Autor:           Milena Araujo de Souza
Data de criação: 28.08.2022
Versão:          1.0
*************************************************************/
let erro = false;

function validarErro(erro)
{
    if(erro == true)
    {
        console.log ('\nERRO: Esse valor não é válido')
        process.exit(1)
    }
}

function validarTabuada(valor)
{
    if(valor < 2 || valor > 100)
    {
        erro = true;
        validarErro(erro);
    }
}

function validarContador(valor)
{
    if(valor < 1 || valor > 50)
    {
        erro = true;
        validarErro(erro);
    }
}

function calcularTabuada(valorTabuadaInicial, valorTabuadaFinal, valorOperadorInicial, valorOperadorFinal)
{
    while(valorTabuadaInicial <= valorTabuadaFinal)
    {
        for(operador = valorOperadorInicial ; operador <= valorOperadorFinal ; operador++)
        {
            console.log(valorTabuadaInicial + ' x ' + operador + ' = ' + (valorTabuadaInicial * operador));
        }

        valorTabuadaInicial++;
        
        console.log('\n');
    }
}

module.exports = {
    validarTabuada, validarContador, calcularTabuada
}