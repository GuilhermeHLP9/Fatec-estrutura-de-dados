const valores = [7, 8, 9, 10, 11]

// console.log(valores)
// console.log(valores[2], valores[4])

valores[6] = 20
// console.log(valores)

valores.push({id:3}, false, 10+15, "texto")
console.log(valores)

console.log("Peguei o ", valores.pop())
console.log("Peguei o ", valores.pop())
console.log("Peguei o ", valores.pop())
console.log(valores)

valores.push(15)
console.log(valores)

delete valores[0]
console.log(valores)

