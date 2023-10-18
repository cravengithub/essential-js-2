// Rest Parameter
let nilai = [78, 45, 68, 95,82, 85, 77];
//  contoh penggunaan rest parameter
let hasil = Math.max(...nilai);
console.log(hasil);

// contoh deklarasi rest parameter
function list(...yy){
    for(const y of yy){
        console.log(y);
    }
}
list(...nilai);