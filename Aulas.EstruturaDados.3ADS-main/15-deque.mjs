import deque from "./lib/Deque.mjs";

let listaCompras = new deque();

console.log("###Lista de Compras: ###")
console.log(`Alista de compras está vazia? ${listaCompras.isEmpty ? "Sim" : "Não"}`)

// Alimenticios => inicio

listaCompras.insertFront("Arroz")
listaCompras.insertFront("Feijão")
listaCompras.insertFront("Carne")
listaCompras.insertFront("Macarrão")

console.log(listaCompras.print())

// Higiene/Limmpeza => final

listaCompras.insertBack("Sabonete")
listaCompras.insertBack("Papel Higienico")
listaCompras.insertBack("Shampo")
listaCompras.insertBack("Detergente")

console.log(listaCompras.print())

listaCompras.insertFront("Café")

listaCompras.insertBack("Sabão em pó")

console.log(listaCompras.print())

let removido = listaCompras.removeBack()

console.log("Item removido no final: " + removido)
console.log(listaCompras.print())

removido = listaCompras.removeFront()

console.log("Item removido no começo: " + removido)
console.log(listaCompras.print())

console.log("O primeiro intem da lista é: " + listaCompras.peekFront())
console.log("O Ultimo intem da lista é: " + listaCompras.peekBack())