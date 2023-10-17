//  Map data type collections
let buah = new Map();
//       kunci  nilai
buah.set('a', 'apel');
buah.set('b', 'belimbing');
buah.set('c', 'chery');
console.log(buah);
//menampilkan salah satu item
console.log(buah.get('a'));
// menampilkan kunci dari map
console.log(buah.keys());
// menampilkan nilai dari map.
console.log(buah.values());
// menghapus item pada map
buah.delete('c');
// melakuan iterasi untuk map
for (const [idx, vl] of buah) {
    console.log(idx + ':' + vl);
}

