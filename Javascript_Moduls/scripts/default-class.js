export default class {
    constructor(name) {
        this.name = name;
    }

    sayHi(name){
        console.log(`Hi ${name}, My name is ${this.name} !`);
    }
}