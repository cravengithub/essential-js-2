// import XMLHttpRequest;
// Asyncrhonous JavaScript (Ajax)
// Buat objek XMLHttpRequest
let XMLHttpRequest = require('xhr2');
const ajax = new XMLHttpRequest();

// Tentukan metode HTTP dan URL yang akan diakses
// HTTP Method yang sering dipakai
// GET, PUT/PATCH, POST, DELETE
ajax.open('GET', 'http://localhost/contoh.json', true);

// Atur callback untuk menangani respons dari server
ajax.onload = function () {
    if (ajax.status === 200) {
        // Respons sukses, proses data di sini
        // let strJSON = JSON.stringify(ajax.responseText);
        let data = JSON.parse(ajax.responseText);
        // console.log(data.hobi);
    } else {
        // Respons gagal
        console.error('Terjadi kesalahan: ' + ajax.status);
    }
};

// Atur callback untuk menangani kesalahan jaringan
ajax.onerror = function () {
    console.error('Terjadi kesalahan jaringan.');
};

// Kirim permintaan ke server
ajax.send();
