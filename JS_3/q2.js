/** Q2. Add getArea using prototype property */
class Rectangle2 {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    displayMeasurements() {
        console.log("Height and width are   ", this.height, this.width)
    }
}

Rectangle2.prototype.getArea = function () {
    return this.height * this.width;
}

let a1 = new Rectagle(10, 20);
console.log("Area is " + a1.getArea());