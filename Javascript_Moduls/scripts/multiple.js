const company = "Qapps Tech";

function sum(first, second) {
    return first + second;
}

class Company {
    constructor(name) {
        this.name = name;
    }
    sayWelcome(name){
        alert(`Hello ${name}, Welcome to ${this.name} !`);
    }
}

export{company, sum, Company};