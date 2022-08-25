/************************************************************************************************** 
 * Objetivo:        Aplicar estruturas de repetição (while e FOR)
 * Autor:           Milena Araujo de Souza
 * Data de Criacao: 08/08/2022
 * Versao:          1.0
***************************************************************************************************/

console.log('\n---------- MÉDIA ESCOLAR ----------');

const {media, validacaoStatus, relatorioExame, exame, validacaoExame, relatorioGeral} = require('./modulos/exercicio1.js')
const { exit } = require('process');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('\nNome do curso: ', function(nomeCurso){
    let curso = nomeCurso;
    
    if(curso == '')
    {
        console.log('\n--- O nome do curso precisa ser informado ---\n');
        exit();
    }
    
    entradaDados.question('\nNome da disciplina: ', function(nomeDisciplina){
        let disciplina = nomeDisciplina;
    
        if(disciplina == '')
        {
            console.log('\n--- O nome da disciplina precisa ser informado ---\n');
            exit();
        }
    
        entradaDados.question('\nNome inteiro do(a) professor(a): ', function(nomeProfessor){
            let nomeProf = nomeProfessor;
    
            if(nomeProf == '')
            {
                console.log('\n--- O nome do(a) professor(a) precisa ser informado ---\n');
                exit();
            }
    
            entradaDados.question('\nQual o sexo? F(Feminino) M(Masculino) ', function(sexoProfessor){
                let sexoProf = sexoProfessor;
    
                if(sexoProf == '')
                {
                    console.log('\n---O sexo do(a) professor(a )precisa ser informado ---\n');
                    exit();
                }
    
                entradaDados.question('\nNome do(a) aluno(a): ', function(nomeAluno){
                    let nomeAlu = nomeAluno;
    
                    if(nomeAluno == '')
                    {
                        console.log('\n--- O nome do(a) aluno(a) precisa ser informado ---\n');
                        exit();
                    }
    
                    entradaDados.question('\nQual o sexo? F(Feminino) M(Masculino) ', function(sexoAluno){
                        let sexoAlu = sexoAluno.toUpperCase;
    
                        if(sexoAlu == '')
                        {
                            console.log('\n--- O sexo do(a) aluno(a) precisa ser informado ---\n');
                            exit();
                        }

                        console.log('\n---------- CALCULAR A MEDIA ----------');

                        entradaDados.question('\nEntrar com o valor da nota 1: ', function(valor1){
                            let nota1= valor1;

                            entradaDados.question('\nEntrar com o valor da nota 2: ', function(valor2){
                                let nota2 = valor2;

                                entradaDados.question('\nEntrar com o valor da nota 3: ', function(valor3){
                                    let nota3 = valor3;

                                    entradaDados.question('\nEntrar com o valor da nota 4: ', function(valor4){
                                        let nota4 = valor4;

                                        let mediaAluno = media (nota1, nota2, nota3, nota4)

                                        if(mediaAluno != false)
                                        {
                                            console.log(mediaAluno)

                                            let statusAluno = validacaoStatus (mediaAluno)
                                            console.log(statusAluno)
                                            if(statusAluno == 'EXAME!')
                                            {
                                                entradaDados.question('Qual a nota do seu exame? ', function(notaExame){
                                                    let resultadoExame = notaExame

                                                    let exameAluno = exame (resultadoExame, mediaAluno)
                                                    console.log(exameAluno)

                                                    let exameValidacao = validacaoExame (exameAluno)
                                                    console.log(exameValidacao)
                                                })
                                            }

                                            relatorioGeral (curso, disciplina, statusAluno, mediaAluno, mediaExame, nota1, nota2, nota3, nota4, notaExame, nomeAlu, sexoAlu, nomeProf, sexoProf)
                                            
                                            
                                        }
                                    })
                                })
                            })
                        })   
                    })
                })
            })
        })
    })
})  