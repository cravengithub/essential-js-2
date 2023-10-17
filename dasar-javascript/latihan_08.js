class Person{
    constructor(name){
      this.name = name;  
    }
    describe(){
        return 'Person name: ' + this.name;
    }
    static logNames(persons){
        for (const person of persons){
            console.log(person.name);
        }
    }
}
/*
const anto = new Person('Anto Sudirjo');
console.log(anto.describe());
const list = [new Person('Anto Sudirjo'), new Person('Susi Suwarni'), new Person('Ani Sunaryo')];
Person.logNames(list);
*/
// class entity
class Employee extends Person{
    constructor(name, title){
        super(name);
        this.title = title;
    }
    describe(){
        return super.describe() +' ' +this.title;
    }
}
const jane = new Employee('Jane', 'CTO');
let hasil = jane.describe();
// jane.divisi().list(); // No SQL
console.log(hasil);
