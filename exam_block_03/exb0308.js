// Math object to perform mathematical operations
let bil = 68.789123443432;
let hasil = Math.round(Number.parseFloat(bil), 3);
// toFixed untuk membulatkan angka dibelakang koma sesuai
// ketentuan yang diinginkan
console.log(bil.toFixed(2));
// pangkat bilangan
hasil = Math.pow(5, 2);
console.log(hasil);
// absolut atau mutlak
console.log(Math.abs(-78));
console.log(Math.ceil(bil));
console.log(Math.floor(bil));
let nilai = [45, 78, 92, 87, 94, 79];
// menampilkan nilai maksimal
console.log(Math.max(45, 78, 92, 87, 94, 79));
// menampilkan nilai min
console.log(Math.min(45, 78, 92, 87, 94, 79));