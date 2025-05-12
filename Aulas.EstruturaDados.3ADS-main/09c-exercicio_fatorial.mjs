/*INSTRUÇÕES

1. Faça uma função recursiva que receba um número inteiro positivo N e
imprima utilizando o console.log(), todos os números pares de 0 até N em
ordem decrescente.

*/

function imprimirParesDecrescente(N) {
  if (N < 0) {
    return
  }
  if (N % 2 === 0){
    console.log(N)
  }
  imprimirParesDecrescente(N-1)
}

imprimirParesDecrescente(20)