// Date Constructor
// let tanggal_lengkap = new Date('2012-03-24');
let tanggal_lengkap = new Date();
let tanggal = tanggal_lengkap.getDate();
let hari = tanggal_lengkap.getDay();
let daftar_hari = ['','senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
let waktu = tanggal_lengkap.getHours();
console.log(waktu);