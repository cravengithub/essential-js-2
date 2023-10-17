// fungsi 

// fungsi tanpa parameter
function hello(){
    return "Selamat pagi semuanya";
}

// fungsi dengan parameter
function tambah(a, b){
    return (a + b);
}

function kali(a, b, c=1){
    return (a * b  * c);
}
// parameter a=8, b = 9
// let hasil = tambah(8);

// parameter b=8, a = 9
let hasil = tambah(b=8, 9, a=9);

// let hasil = kali(c=3, b=4);

// console.log(hasil);

// Arrow Function
const add2 = (a,b) => {return a + b};
hasil = add2(5, 2);
// console.log(hasil);

const greeting = (a) => {return a +", Selamat pagi"};
hasil = greeting("Anto");
console.log(hasil);
