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

var person1= new person("Nag","Dev",24,"NodeJS","delhi","110011","16/03/98",true,"Software Engineer");
// console.log(person1)

var person2= new person("Dak","Kiran",35,"Java","Hyd","500010","15/06/87",true,"Project Engineer");
// console.log(person2);

function print(){
    console.log(person1);
    console.log(person2)
}
print();