/** Create a Rectagle class with height and width */
class Rectagle1{
height;
width;
constructor(height,width){
this.height=height;
this.width=width;
}

displayMeasurements(){
    console.log("Height and width are   ",this.height,this.width)
}
}

const r1= new Rectagle1(10,20);
r1.displayMeasurements();

const r2= new Rectagle1(2,4);
r2.displayMeasurements();

const r3= new Rectagle1(3,5);
r3.displayMeasurements();

r3.height=10;
r3.displayMeasurements();
