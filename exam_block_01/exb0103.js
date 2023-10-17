// Getter untuk object
const jane = {
    first: 'Jane',
    last: 'Doe',    
    // getter
    get full(){
        return this.first + " " + this.last;
    },
    // setter
    set full(fullname){
        const parts = fullname.split(' ');
        this.first = parts[0];
        this.last = parts[1];
        // console.log('Sukses');
    }
};
// jane.last = 'Doe' +' Foster';
jane.full = 'Agus Surahmman';
// console.log(jane.full)
console.log(jane.);