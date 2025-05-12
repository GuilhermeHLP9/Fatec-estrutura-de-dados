import Queue from "./lib/Queue.mjs";

let fila = new Queue()

console.log("Está vazio?"+ fila.isEmpty)

fila.enqueue('Alexandre')
fila.enqueue('Gabriel')
fila.enqueue('Renan')
fila.enqueue('maria')
fila.enqueue('Joaquim')

console.log(fila.print())

console.log("Está vazio?"+ fila.isEmpty)

console.log(fila.print())

// Remoção na fila

let atendido = fila.dequeue()
console.log({atendido})
let proximo = fila.peek()
console.log({proximo})

console.log(fila.print())

fila.enqueue('Sergio')
fila.enqueue('Leonardo')
fila.enqueue('Kaio')

console.log(fila.print())