// Set Data Collection
let set = new Set([2, 3, 5, 7, 11]);
// let set = new Set();
// method Set
// menambahkan data set
set.add(12);
// data yang sama tidak dapat ditambahkan lagi
set.add(7);

//  menghapus data pada set
set.delete(3);
for (const st of set){
    console.log(st);
}
let arr = Array.from(set)
// console.log(set);
console.log(arr);