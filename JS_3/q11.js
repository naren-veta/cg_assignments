class BankAccount{
    acct_num;
    acct_name;
    acct_bal;
    constructor(acct_num,acct_name,acct_bal){
        this.acct_num=acct_num;
        this.acct_name=acct_name;
        this.acct_bal=acct_bal;
    }
    getCurrentBalance(){
        return this.acct_bal;
    }
}
class Savings extends BankAccount{
    
    isSalary;
    constructor(acct_num,acct_name,acct_bal,isSalary){
        super(acct_num,acct_name,acct_bal);
        this.isSalary=isSalary
    }

    withdraw(amt){
        let bal=this.acct_bal-amt;
        if(bal<0){
            console.log("Insufficient funds")
            return;
        }
        else
        this.acct_bal= bal;
    }
}
class Current extends BankAccount{
    oDLimit;
    constructor(acct_num,acct_name,acct_bal,oDLimit){
        super(acct_num,acct_name,acct_bal);
        this.oDLimit=oDLimit;
    }

    withdraw(amt){
        let bal=(this.acct_bal+this.oDLimit)-amt;
        if(bal<0){
            console.log("Insufficient funds")
            return;
        }
        else if(this.acct_bal>= bal){
            this.acct_bal-= bal;
        }
        else
        {
            this.oDLimit-=(bal-this.acct_bal)
        }
    }
}

let s1= new Savings("11111","ABC",1000,true);

let c1=new Current("22222","PQR",500,500);

s1.withdraw(1002);
c1.withdraw(1002);
console.log(s1.getCurrentBalance());
console.log(c1.getCurrentBalance());