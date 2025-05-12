let alunos = []

const readline = require('readline')
// import readline from 'readline'

// import {objMotoristas} from "./data/motoristas-obj-desord.mjs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cadastrarAluno(nome, ra, idade, sexo, media, resultado) {

    resultado = media >= 6 ? 'Aprovado' : 'Reprovado';
    let aluno = {
        nome: nome,
        ra: ra,
        idade: idade,
        sexo: sexo,
        media: media,
        resultado: resultado
    }
    alunos.push(aluno);
    console.log(`Aluno ${nome} cadastrado com sucesso!`)
    menu()
}

function mergeSort(vetor, fnComp) {
    if (vetor.length < 2) return vetor

    let meio = Math.floor(vetor.length / 2)
    let vetEsq = vetor.slice(0, meio)
    let vetDir = vetor.slice(meio)

    vetEsq = mergeSort(vetEsq, fnComp)
    vetDir = mergeSort(vetDir, fnComp)

    let posEsq = 0, posDir = 0, vetRes = []

    while (posEsq < vetEsq.length && posDir < vetDir.length) {
        if (fnComp(vetDir[posDir], vetEsq[posEsq])) {
            vetRes.push(vetEsq[posEsq])
            posEsq++
        }
        else {
            vetRes.push(vetDir[posDir])
            posDir++
        }
    }
    let sobra

    if (posEsq < posDir) {
        sobra = vetEsq.slice(posEsq)
    }
    else {
        sobra = vetDir.slice(posDir)
    }
    return [...vetRes, ...sobra]

}

function menu() {
    console.log("\nEntre com uma das opções abaixo: ")
    console.log("\n1. Cadastrar Aluno")
    console.log("2. Relatório de Alunos em ordem crescente por Nome.")
    console.log("3. Relatório de Alunos em ordem decrescente por RA.")
    console.log("4. Relatório de Alunos em ordem crescente por Nome, apenas dos Aprovados.")
    console.log("5. Sair")

    rl.question("\nEscolha uma opção: ", function (opcao) {
        switch (opcao) {
            case '1':
                rl.question("\nNome: ", function (nome) {
                    rl.question("RA: ", function (ra) {
                        rl.question("Idade: ", function (idade) {
                            rl.question("Sexo (M/F): ", function (sexo) {
                                rl.question("Média: ", function (media) {
                                    cadastrarAluno(nome, ra, parseInt(idade), sexo, parseFloat(media))
                                })
                            })
                        })
                    })
                })
                break;
            case '2':
                let alunosOrd = mergeSort(alunos, (elem1, elem2) => elem1.nome > elem2.nome)
                console.log("\nLista de alunos ordenados em oredem crescente por Nome:")
                console.log(alunosOrd)
                menu()
                break;
            case '3':
                let raOrd = mergeSort(alunos, (elem1, elem2) => elem1.ra < elem2.ra)
                console.log("\nLista de alunos ordenados em ordem decrescente por RA:")
                console.log(raOrd)
                menu()
                break;
            case '4':
                let alunosOrdAp = mergeSort(alunos, (elem1, elem2) => elem1.nome > elem2.nome)
                console.log("\nLista de alunos ordenados em oredem crescente por Nome, apenas dos Aprovados:")

                let alunosAp = []
                for(let i = 0; i <= alunosOrdAp.length - 1; i++ ){
                    if(alunosOrdAp[i].resultado == 'Aprovado'){
                        alunosAp.push(alunosOrdAp[i])
                    }
                }
                console.log(alunosAp)
                menu()
                break;
            case '5':
                console.log("Saindo...")
                rl.close();
                break;
            default:
                console.log("Opção inválida!")
                menu()
        }
    })
}

menu()