/************************************************************************************************** 
 * Objetivo:        Funções Par-Ímpar
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 25/08/2022
 * Versao:          1.0
***************************************************************************************************/

const pares = function(numero1, numero2)
{
    const pares = []
    while (numero1 <= numero2){
        if(numero1 %2 == 0){
            pares.push(numero1)
        }
        numero1++
    }
    return pares
}

const impares = function(numero1, numero2)
{
    const impares = []
    while (numero1 <= numero2){
        if(numero1 %2 != 0){
            impares.push(numero1)
        }
        numero1++
    }
    return impares
}

const parImpar = function(numero1, numero2)
{
    const funcaoPar = pares(numero1, numero2)
    const funcaoImpar = impares(numero1, numero2)
    const parImpar = []
    parImpar.push(funcaoPar, funcaoImpar)
    return parImpar
}

module.exports={
    pares, impares, parImpar
}