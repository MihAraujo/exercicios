/************************************************************************************************** 
 * Objetivo:        Exercício Par-Ímpar
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 28/08/2022
 * Versao:          1.0
***************************************************************************************************/
console.log('\n---------- PAR ÍMPAR ----------\n')

const {pares, impares, parImpar} = require('./exercicio3/exercicio3')
var readline = require('readline')

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o primeiro valor (entre 0 e 500): ', function(valor1){
    let numero1 = parseFloat(valor1)

    entradaDados.question('\nDigite o segundo valor (entre 100 e 1000): ', function(valor2){
        let numero2 = parseFloat(valor2)

        if(numero1 < 0 || numero1 > 500 && numero2 < 100 || numero2 > 1000){
            console.log('ERRO: O valor inicial deve estar entre 0 e 500 e O valor final deve estar entre 100 e 1000')
        }else{
            console.log('SEQUÊNCIA DE NÚMEROS PARES: \n' + pares(numero1, numero2))
            console.log('SEQUÊNCIA DE NÚMEROS ÍMPARES: \n' + impares(numero1, numero2))
            console.log('AS DUAS SEQUÊNCIAS: \n' + parImpar(numero1, numero2))
        }
    })
})