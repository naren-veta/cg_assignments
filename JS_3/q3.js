/** Q3. Add getArea using prototype property */
class Rectangle3 {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

Rectangle3.prototype.getArea = function () {
    return this.height * this.width;
}
let r = new Rectangle3(4, 5);
r.height=50;
console.log(r.getArea());
