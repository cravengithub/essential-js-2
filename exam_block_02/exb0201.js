class Person {
    #firstName; // attribute
    #lastName; // contoh enkapsulasi
    // constructor
    // nama parameter hanya berfungsi untuk memberi nilai awal dan 
    // berbeda karakteristik dengan fungsi atau method.
    // letak nilai pada parameter bersifat tetap walaupun posisi
    // pemanggilan nama parameter berbeda tempat.
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
/*
 const rudi = new Person('Rudi');
 let hasil = Person.extracNames([new Person('Anto'), new Person('Budi'), new Person('Susi')]);
rudi.firstName = "Rudi Hartono";
console.log(rudi.describe());
console.log(rudi.describe());
console.log(hasil);
*/

// contoh Pewarisan
class Employee extends Person {
    #title; // contoh enkapsulasi
    #email;
    #password;
    constructor(firstName, lastName, title) {
        super(firstName, lastName);
        this.#title = title;
    }
    set title(title){
        return this.#title = title;
    }
    get title(){
        return this.#title;
    }
    // salah satu contoh polimorfisme bentuk override
    describe() {
        return "Karyawan dengan nama " + this.firstName + " " + this.lastName
            + " merupakan " + this.#title;
    }
}

// const budi = new Employee('Budi', 'Raharja', 'Manager');
const budi = new Employee();
budi.firstName = 'Budi';
budi.lastName = 'Raharja';
budi.title = 'Manager';
console.log(budi.describe());


