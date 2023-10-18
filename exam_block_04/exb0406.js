// Explain and apply the concept of promises
// Contoh Promise sederhana

// Fungsi yang mengembalikan janji (Promise)
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulasi operasi asynchronous (misalnya, permintaan HTTP)
        setTimeout(() => {
            const data = { id: 1, name: "Contoh Data" };
            // const data = false;
            if (data) {
                resolve(data); // Janji dipenuhi dengan data
            } else {
                reject("Data tidak ditemukan"); // Janji ditolak dengan pesan kesalahan
            }
        }, 1000);
    });
}

// Menggunakan Promise
fetchData()
    .then((result) => {
        console.log("Data diterima:", result);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        console.log("Promise telah jalan");
    });
