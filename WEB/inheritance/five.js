class Account{
constructor(id,name)
{
    this.id=id;
    this.name=name;

}
}
class child extends Account{
    constructor(id, name, amount)
    {
super(id, name);
this.amount=amount;
    }
}
let c =new child(101,'kiran',20000);
console.log(c);
