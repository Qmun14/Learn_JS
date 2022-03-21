export class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello(name){
        alert(`Hello ${name}, nama saya ${this.name} !`);
    }
}