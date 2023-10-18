class Person {
    #firstName; // attribute
    #lastName; // contoh enkapsulasi
    constructor(firstName, lastName = '') {
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    describe() {
        return 'Person named ' + this.#firstName + ' | ' + this.#lastName;
    }
    setFirstName(firstName) {
        this.#firstName = firstName;
    }
    getFirstName() {
        return this.#firstName;
    }
    // setter yang direkomendasikan di Javascript
    set firstName(firstName) {
        this.#firstName = firstName;
    }
    // getter yang direkomendasikan di Javascript
    // @property
    get firstName() {
        return this.#firstName;
    }
    // @setter.last
    set lastName(lastName) {
        this.#lastName = lastName;
    }
    // getter yang direkomendasikan di Javascript
    get lastName() {
        return this.#lastName;
    }
    static extracNames(persons) {
        return persons.map(person => person.#firstName);
    }
}
const PHI = 3.14;
function sayHello(nama, text) {
    return nama + ' ' + text;
}

export { PHI, Person, sayHello };