// Implement the mechanism for call forwarding
// Call Function
let person ={
    first: "John", 
    last: "Doe",
    fullname : function(...args){
        console.log(args);
        return this.first + ' ' + this.last;
    }
}
let person1 ={
    first: "Anto", 
    last: "Raharja",
}
let person2 ={
    first: "Susi", 
    last: "Sutarna",
}
const staff = {
    describe: function(nama, divisi){
            return nama + ' ' + divisi
    }
}
// contoh penggunaan call
console.log(person.fullname.call(person2, ['Ani', 'Susi']));
console.log(staff.describe.call(person1, 'Susi', 'produksi'));
// contoh penggunaan apply
console.log(person.fullname.apply(person1, ['Ani', 'Susi']));

// contoh penggunaan bind, jadi bind_funct itu akan menjadi function
const bind_funct = person.fullname.bind(person1);
console.log(bind_funct());

const desc = staff.describe.bind(person1, 'Budi', 'Development');
console.log(desc());