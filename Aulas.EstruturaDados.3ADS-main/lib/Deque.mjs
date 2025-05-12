export default class deque{
    #data // vetor primario

    constructor(){
        this.#data = [] // vetor vazio
    }

    // inserção no inicio
    insertFront(val){
        this.#data.unshift(val)
    }

    // inserção final
    insertBack(val){
        this.#data.push(val)
    }

    // remoção no incio
    removeFront(){
        return this.#data.shift()
    }

    // remoção no final
    removeBack(){
        return this.#data.pop()
    }

    // cosulta o inicio
    peekFront(){
        return this.#data[0]
    }

    // consulta no final
    peekBack(){
        return this.#data[this.#data.length-1]
    }

    // retorna o tamanho
    get isEmpty(){
        return this.#data.length === 0
    }

    // imprimi o deque (efeito de depuração)
    print(){
        let output = '[ '
        for(let i=0; i<this.#data.length; i++){
            if(output !== '[ ') output += ', '
            output += `(${i}):${this.#data[i]}`
        }
        return output + ' ]'
    }
}