// latihan object
const obj ={
    first: 'Jane', //property
    last: 'Doe',
    getFullName(){
        return this.first + ' ' + this.last;
    }
};

console.log('nama depan: ' + obj.first);
console.log('nama belakang: ' + obj.last);
console.log('nama lengkap: ' + obj.getFullName());