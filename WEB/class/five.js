class Account{
    min_balance=500;
    open_Account(){
        console.log("Account opened successfully");
    }
    close_Account(){
        console.log("Account colsed successfully");
    }

}
a1=new Account()

console.log(a1.min_balance)
a1.close_Account()
a1.open_Account()
