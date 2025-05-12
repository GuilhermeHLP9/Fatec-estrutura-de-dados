import Stack from "./lib/Stack.mjs";

let pinlha = new Stack()

console.log(pinlha.print())
console.log("Pilha está vazia:", pinlha.isEmpty)

pinlha.insert(5)
pinlha.insert(15)
pinlha.insert(4)
pinlha.insert(2)
pinlha.insert(6)
pinlha.insert(7)

console.log(pinlha.print())

let guardar1 = pinlha.remove()
let guardar2 = pinlha.remove()

console.log(pinlha.print())
console.log(pinlha.peek())

console.log("Removido1", guardar1)
console.log("Removido1", guardar2)

console.log("Pilha está vazia:", pinlha.isEmpty)