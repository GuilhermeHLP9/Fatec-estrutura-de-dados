const nome1 = "Concatenar"
const concatenar = "Olá " + nome1 + "!"
console.log(concatenar)

const nome2 = "Template"
const template = ` Olá ${nome2} !`
console.log(template)


function conversaoMaiscula(m){
    return m.toUpperCase()
}

console.log(`Olá ${conversaoMaiscula("fatecanos")}!!!`)