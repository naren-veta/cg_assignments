function person(fname,lname,age,skills, city, pincode,dob,married, profession){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.skills=skills;
    this.address={"city":city, "pincode":pincode},
    this.dob=dob;
    this.married=married;
    this.profession=profession;
}

var amitabh= new person("Amitabh","Bachan","62","NodeJS","delhi","110011","16/03/46",true,"Actor");
var abhishek = {...amitabh};

abhishek.fname="Abhishek";
abhishek.age="42";
abhishek.email="abc@123.com"

var aradhya = {...abhishek,...amitabh};
aradhya.fname="Aradhya"
aradhya.age="6"
aradhya.dob="1/5/2019"


function print(){
    // console.log(amitabh);
    // console.log(abhishek);
    console.log(aradhya)
}
print();