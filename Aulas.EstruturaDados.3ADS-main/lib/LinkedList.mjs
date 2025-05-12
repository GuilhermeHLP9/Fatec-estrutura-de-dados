class Node {
    constructor(val) {
      this.data = val;
      this.next = null;
    }
  }
  
  export default class LinkedList {
    #head; // Inicio da Lista(cabeça)
    #tail; // Fim da Lista(cauda)
    #count; // Quantidade de Nodos da Lista
  
    constructor() {
      this.#head = null;
      this.#tail = null;
      this.#count = 0;
    }
  
    // Getter que retorna se alista está vazia ou não
    get isEmpty() {
      return this.#count === 0;
    }
  
    // Getter que retorna a quantidade de elementos da lista
    get count() {
      return this.#count;
    }
  
    //método para inserir em qualquer posição
    insert(pos, val) {
      const inserted = new Node(val);
  
      //1º caso: a lista está vazia
      if (this.isEmpty) {
        this.#head = inserted;
        this.#tail = inserted;
      }
  
      //2º caso: lista não vazia, inserção na primeira posição
      else if (pos === 0) {
        inserted.next = this.#head;
        this.#head = inserted;
      }
  
      //3º caso: inserção no final da lista
      else if (pos >= this.#count) {
        this.#tail.next = inserted;
        this.#tail = inserted;
      }
  
      //4º caso: inserção no meio da lista
      else {
        let before = this.#head;
  
        for (let i = 1; i < pos; i++) {
          before = before.next;
        }
  
        let after = before.next;
  
        inserted.next = after;
  
        before.next = inserted;
      }
  
      this.#count++;
    }
  
    //Método de remoção de um nodo na lista
  
    remove(pos) {
      //1º caso se a lista está vazia ou fora dos limites da lista
      if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
        return undefined;
      }
  
      let removed;
      //2º caso: remoção no início da lista
      if (pos === 0) {
        removed = this.#head;
  
        this.#head = this.#head.next;
  
        //atualizar o tail em caso de remoção do único nodo restante
        if (this.#count === 1) {
          this.#tail = null;
        }
      }
  
      //3º caso: remoção de nodo intermediário ou final da lista
      else {
        let before = this.#head;
        for (let i = 1; i < pos; i++) {
          before = before.next;
        }
        removed = before.next;
  
        let after = removed.next;
  
        before.next = after;
  
        if (pos === this.#count - 1) {
          this.#tail = before;
        }
      }
  
      this.#count--;
  
      return removed.data;
    }
  
    removeHead() {
      return this.remove(0);
    }
  
    removeTail() {
      return this.remove(this.#count - 1);
    }
  
    insertHead(val) {
      this.insert(0, val);
    }
  
    insertTail(val) {
      this.insert(this.#count - 1, val);
    }
  
    indexOf(val) {
      //1º caso lista vazia
      if (this.isEmpty) {
        return -1;
      }
      let node = this.#head;
  
      for (let i = 0; i < this.#count; i++) {
        if (node.data === val) {
          return i;
        }
        node = node.next;
      }
  
      return -1;
    }
  
    peek(pos) {
      if (this.isEmpty || pos < 0 || pos > this.#count - 1) {
        return undefined;
      }
  
      let node = this.#head;
      for (let i = 0; i < pos; i++) {
        node = node.next;
      }
  
      return node.data;
    }
  
    peekHead(){
      return this.peek(0)
    }
  
    peekTail(){
      return this.peek(this.#count - 1)
    }
  
    print() {
      let output = "( ";
      let node = this.#head;
      for (let i = 0; i < this.#count; i++) {
        if (output !== "( ") {
          output += ", ";
        }
        output += `[${i}]: ${node.data}`;
        node = node.next;
      }
      output += ` ), count: ${this.#count}`;
      return output;
    }
  }