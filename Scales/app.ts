class Scales {
    productsArray: object[];

    constructor() {
        this.productsArray = [];
    }

    add(...product: Product[]) {
        this.productsArray = [...product]
    }
    getSumScale(): number {
        let productsWeight = 0;
        this.productsArray.forEach((product: Product) => {
            productsWeight += product.weight;
        })
        return productsWeight;
    }
    getNameList() {
        let productsNameList: string[] = [];
        this.productsArray.forEach((product: Product) => {
            productsNameList.push(product.name);
        })
        return productsNameList;
    }
}

class Product {

    name: string;
    weight: number;

    constructor(_name: string, _weight: number) {
        this.name = _name;
        this.weight = _weight;
    }

    getName() {
        return this.name;
    }

    getScale() {
        return this.weight;
    }
}

class Apple extends Product { }
class Tomato extends Product { }
class Orange extends Product { }

var scale: Scales = new Scales();

var apple1: Apple = new Apple('Любимое', 110);
var apple2: Apple = new Apple('Минское', 90);

var tomato1: Tomato = new Tomato('Сливка', 50);
var tomato2: Tomato = new Tomato('Белорусские', 70);

var orange1: Orange = new Orange('Orange1', 120);
var orange2: Orange = new Orange('Orange2', 220);

scale.add(apple1, apple2, tomato1, tomato2, orange1, orange2);

console.log('Общий вес: ' + scale.getSumScale() + 'г');
console.log('На весах есть: ' + scale.getNameList());

