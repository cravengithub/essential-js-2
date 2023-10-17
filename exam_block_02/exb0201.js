class Person {
    #firstName; // attribute
    #lastName;
    // constructor
    // nama parameter hanya berfungsi untuk memberi nilai awal dan 
    // berbeda karakteristik dengan fungsi atau method.
    // letak nilai pada parameter bersifat tetap walaupun posisi
    // pemanggilan nama parameter berbeda tempat.
    constructor(firstName, lastName='Marjuki') {
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
    get firstName() {
        return this.#firstName;
    }

    static extracNames(persons) {
        return persons.map(person => person.#firstName);
    }
}
const rudi = new Person('Rudi');
// rudi.firstName = "Rudi Hartono";
console.log(rudi.describe());
// console.log(rudi.describe());
