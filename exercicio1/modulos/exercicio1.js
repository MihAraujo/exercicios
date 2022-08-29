/************************************************************************************************** 
 * Objetivo:        Funções do sistema de uma faculdade
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 08/08/2022
 * Versao:          1.0
***************************************************************************************************/

const { exit } = require("process");

const media = function(nota1, nota2, nota3, nota4)
{
    let valor1 = nota1
    let valor2 = nota2
    let valor3 = nota3
    let valor4 = nota4
    let statusAluno
    let media
    let notaExame
    let erro = false

    if(valor1 == ''|| valor2 == '' || valor3 == '' || valor4 == ''){
        console.log('\n--- É necessário mostrar todas as notas para o cálculo ---');
        erro = true
    }else if((valor1 < 0 || valor1 > 100) || (valor2 < 0 ||valor2 > 100) || (valor3 < 0 || valor3 > 100) || (valor4 < 0 || valor4 > 100)){
        console.log('\n--- As notas só podem ser de 0 a 100 ---')
        erro = true
    }else 
    {
        media = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4))/4;
    }
    if(erro)
    {
        return false
    }else
    {
        return media
    }
}

const validacaoStatus = function(media)
{
    if(media >= 70)
    {
        statusAluno = 'APROVADO!'

    }else if (media < 50 )
    {
        statusAluno = 'REPROVADO!'

    }else if (media >= 50 || media <= 69)
    {
        statusAluno = 'EXAME!'
  
    }

        return statusAluno
   

}

const relatorioExame = function(resultadoExame, media)
{
    let notaExame = resultadoExame
    let resultado = media
    let notaFinal

    notaFinal = (media + notaExame)/2;
    if(notaFinal > 60){
         statusAluno = 'APROVADO'
    }
}

const exame = function (notaExame, media)
{
    let nota = notaExame
    
        let mediaExame = (parseFloat(media) + parseFloat(nota))/2
        return mediaExame
   
}

const validacaoExame = function(exameAluno)
{
    let statusAluno
    if(exameAluno >= 60){
        statusAluno = 'APROVADO!'
    }else{
        statusAluno = 'REPROVADO!'
    }

    return statusAluno
}

const relatorioAluno = function ( disciplina, statusAluno, nota1, nota2, nota3, nota4, notaExame, nomeAlu, sexoAlu)
{
    if (sexoAlu == 'f')
    {
        console.log (`\nA aluna ${nomeAlu} foi ${statusAluno} na disciplina ${disciplina} `)
        console.log (`Notas da aluna: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`)
    }else{
        console.log (`\nO aluno ${nomeAlu} foi ${statusAluno} na disciplina ${disciplina} `)
        console.log (`Notas do aluno: ${nota1}, ${nota2}, ${nota3}, ${nota4}, ${notaExame}`)
    }

}

const relatorioProf = function (nomeProf, sexoProf)
{
    if (sexoProf == 'f')
    {
        console.log (`Professora: ${nomeProf}`)
    }else
    {
        console.log (`Professor: ${nomeProf}`)
    }
}

const relatorioGeral = function (curso, disciplina, statusAluno, mediaAluno, mediaExame, nota1, nota2, nota3, nota4, notaExame, nomeAlu, sexoAlu, nomeProf, sexoProf)
{
    relatorioAluno( disciplina, statusAluno, nota1, nota2, nota3, nota4, notaExame, nomeAlu, sexoAlu)
    console.log(`Curso: ${curso}`)
    relatorioProf(nomeProf, sexoProf)
    console.log(`Média final: ${mediaAluno}`)
    console.log('Media final do exame:' + relatorioExame());


}




module.exports = {
    media, validacaoStatus, relatorioExame, exame, validacaoExame, relatorioGeral
}


