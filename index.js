// Your code here
class Polygon{
    constructor(array){
        // for (let i = 0; i < array.length; i++){
        //     this[`side${i}`] = array[i]
        // }
        this.sides = array
    }
    get countSides(){
        return this.sides.length
    }
    get perimeter(){
        return this.sides.reduce((acc, val) => acc + val)
    }
}
class Triangle extends Polygon{
    get isValid(){
        let a, b, c
        a = this.sides[0]
        b = this.sides[1]
        c = this.sides[2]
        return ((a + b > c) && (a + c > b) && (b + c > a))
    }
}
class Square extends Polygon{
    get isValid(){
        return (this.sides.every(side => side === this.sides[0]))
    }
    get area(){
        return this.sides[0] ** 2
    }
}