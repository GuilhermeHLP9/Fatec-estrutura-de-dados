export default class Stack{
    //atributos
    #data

    constructor(){
        this.#data = []
    }

    //metodos
    insert(val){ //Insere
        this.#data.push(val)
    }

    remove(){ // remove
        return this.#data.pop()
    }

    peek(){ //olha o ultimo valor
        return this.#data[this.#data.length -1]
    }

    get isEmpty(){ // fala se o array esta vazio
        return this.#data.length === 0
    }

    print(){ // mostra o array
        return JSON.stringify(this.#data)
    }


}