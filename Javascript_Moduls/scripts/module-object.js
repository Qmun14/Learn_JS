export const firstName = "Ma'mun";
export const middleName = "Ramdhan";
export const lastName = "Van der Werff";

export function hello() {
    console.log(`Hello World !`);
}

export class Person{
    constructor(name) {
        this.name = name;
    }

    sayHello(name){
        console.log(`Hello ${name}, How Are You`);
    }
}
