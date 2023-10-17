// Dasar Array
// array multi type data
let arr = ['A', 'ab', true, 1, 2, 4, 6];
// array single type data
let same = [5, 6, 7, 8, 12];

// array multi dimensi
// array 2 dimensi (2x2)
// index     0           1               2
// index            0  1     2  
// index                  0   1 2
let md = [[6, 7], [4, 8, [4, 6, 7]], [1, 2, 3]];
let buah = ['apel', 'belimbing', 'chery'];
// console.log(md[1][2][1]);
// fungsi menambahkan item di posisi belakang
buah.push('durian');
// mengambil item dengan posisi paling atas.
// setelah proses pop item akan berkurang
buah.pop()
// iterator untuk array
for (const [idx,b] of buah.entries()){
    // console.log(idx);
    // console.log(b);
}
let nilai = [65, 72,56, 81, 92, 78, 84];
// mengurutkan secara descending
nilai.reverse();
// mengurutkan secara ascending
nilai.sort();

console.log(nilai);