//função simples sem retorno 
function soma(){
    var res
    res = 20 + 10
    console.log(res)
}
soma()

//função com parametro sem retorno
function soma1(y,x){
    console.log(y+x)
}

soma1(20,10)

//função com retorno
function somaRetorno(a,b){
    return a + b
}

console.log(somaRetorno(2,9))

const imprmirSoma = function (a,b){
    console.log(a+b)
}
imprmirSoma(10,40)

const sub = (a,b) => a - b
console.log(sub(6,2))

const imprimir = a => console.log(a)

imprimir("teste")