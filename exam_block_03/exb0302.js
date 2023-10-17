const str1 = 'Don\'t say "goodbye"'; // untuk menampilkan ' menggunakan \
const str2 = "Don't say \"goodbye\""; // string literals
let kalimat = 'Saya sedang belajar\nPemrograman Javascript';
// \t adalah tab
const biodata = 'nama: \t\t Anto\n' + 
                'alamat: \t Bandung\n' +
                'email: \t\t anto@mail.com\n';
/*
console.log(str1);
console.log(kalimat);
console.log(biodata);
*/

// String Method
let frase = "kembang desa";
let hasil = frase.includes('desa'); //memuat karakter tertentu
hasil = frase.startsWith('ke'); // dimulai dengan
hasil = frase.endsWith('sa');
let index = frase.indexOf('bd');
// console.log(hasil);
let kata = frase.split(' ')
// console.log(index);
kalimat = kalimat.replace('\n', ' ')
console.log(kalimat.split(' '));
