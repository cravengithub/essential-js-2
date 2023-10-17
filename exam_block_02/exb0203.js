// static Private Class
class StaticPrivateClass{
    static #staticPrivateField = 'hello';
    static #twice(){
        // staticPrivateClass sebaiknya diganti dengan this
        const str = StaticPrivateClass.#staticPrivateField;
        return str + ' ' + str;        
    }
    static getResultOfTwice(){
        // pemakaian this untuk menyebut kelas yang bersangkutan, ini direkomendasikan
        return this.#twice();
    }
}
console.log(StaticPrivateClass.getResultOfTwice());
