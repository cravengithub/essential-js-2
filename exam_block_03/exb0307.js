// JSON object to process data
let mahasiswa = JSON.stringify({
    nim: 7758,
    nama: 'Susi',
    email: 'susi@mail.com',
    alamat: 'Bandung'
});
// console.log(mahasiswa);
// console.log(JSON.parse(mahasiswa));

let matakuliah  = {
    kode: 'MK1',
    nama: 'Pemrograman Web',
    sks: 4
}; 
let mkJSON = JSON.stringify(matakuliah);
console.log(JSON.parse(mkJSON));
