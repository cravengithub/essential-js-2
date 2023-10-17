class Translator {
    static translation = {
        yes: 'ja',
        no: 'nein',
        maybe: 'vielleicht',
    };
    static englshWords = [];
    static germanWords = [];
    static{
        for (const [english, german] of Object.entries(this.translation)){
           this.englshWords.push(english);
           this.germanWords.push(german); 
        }
    }
}
console.log(Translator.translation.yes);
console.log(Translator.translation);
console.log(Translator.englshWords);
console.log(Translator.germanWords);

let arr = [Translator.englshWords, Translator.germanWords];
for(const english of Translator.englshWords){
    console.log(english)
}
console.log(arr);
for(const ar of arr){
    for (const [english, german] of ar){
        console.log(english + ' ' + german);
    }
}