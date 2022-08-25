class Point{
    constructor(p1,p2){
     this.p1 = p1;
     this.p2 = p2;
    }
    static distance(point1,point2){
        let a = Math.abs(point1.p2 - point2.p2);
        let b = Math.abs(point2.p1 - point1.p1);
        let c = Math.sqrt(a**2 + b**2);
        return c;
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));