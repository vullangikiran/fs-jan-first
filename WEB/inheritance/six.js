class Account{
constructor(id,name)
{
    this.id=id;
    this.name=name;

}
}
class child extends Account{
    constructor(id, name, amount,type)
    {
super(id, name);
this.amount=amount;
this.type=type;
    }
}
let c =new child(101,'kiran',20000,'current');
console.log(c);
