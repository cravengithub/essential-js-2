//  Use async and await to handle promises
/*
async adalah kata kunci yang ditempatkan sebelum deklarasi fungsi. 
Ini mengubah fungsi menjadi sebuah "async function."
Fungsi yang diberi label async mengembalikan Promise secara otomatis. 
Ini berarti Anda dapat menggunakan await di dalamnya untuk menunggu hasil yang dijanjikan (Promise).
*/
// Fungsi yang mengembalikan Promise
function ambilData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Data berhasil diambil');
        }, 3000);
    });
}

// Fungsi asinkron yang menggunakan await
async function prosesData() {
    try {
        console.log('Memulai pengambilan data...');
        const hasil = await ambilData(); // Menunggu hingga Promise selesai
        console.log(hasil);
        console.log('Proses selesai.');
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
}

// Memanggil fungsi asinkron
prosesData();
