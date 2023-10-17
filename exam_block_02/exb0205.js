// Static Factory Method
class Point{
    static fromPolar(radius, angle){
        const x = radius * Math.cos(angle);
        const y = radius * Math.sin(angle);
        return new Point(x,y);
    }

    constructor(x =0, y=0){
        this.x = x;
        this.y = y;
    }    
}
let hasil = Point.fromPolar(13, 0.39479111969976155); //mengembalikan object Point
// const point = new Point();
console.log(hasil);
console.log(hasil.x);
console.log(hasil.y);
