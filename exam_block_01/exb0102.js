const jane = {
    first: 'Jane',
    last: 'Foster',
    height: 175,
    say(text){
        return this.first + " berkata bahwa " + text;
    } 
}
let nama = jane.first; // tidak diperbolehkan dalam OOP
console.log(jane.say('"mempelajari Javascript"'));