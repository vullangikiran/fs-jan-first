class p{
    constructor() {
        console.log("parent");

    }
}
class child extends p{
    constructor() {
        console.log("child");
    }
}
let c1 = new child()
