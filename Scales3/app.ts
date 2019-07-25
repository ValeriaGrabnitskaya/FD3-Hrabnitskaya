interface IStorageEngine {
    addItem(item: Product): void;
    getItem(_index: number): Product;
    getCount(): number;
}

class Scales<StorageEngine extends IStorageEngine> {

    storageEngineArray: StorageEngine[];

    constructor() {
        this.storageEngineArray = [];
    }

    add(storageEngine: StorageEngine) {
        this.storageEngineArray.push(storageEngine);
    }
    getSumScale(): number {
        let productsWeight = 0;
        this.storageEngineArray.forEach((storageEngine: StorageEngine, index) => {
            productsWeight += storageEngine.getItem(index).getScale();
        })
        return productsWeight;
    }
    getNameList(): string[] {
        let productsNameList: string[] = [];
        this.storageEngineArray.forEach((storageEngine: StorageEngine, index) => {
            productsNameList.push(storageEngine.getItem(index).getName());
        })
        return productsNameList;
    }
}

class Product {

    private name: string;
    private weight: number;

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

class ScalesStorageEngineArray implements IStorageEngine {

    productsArray: Array<Product>;

    constructor() {
        this.productsArray=[];
    }

    addItem(product: Product) {
        this.productsArray.push(product);
    }

    getItem(id: number): Product {
        return this.productsArray[id];
    }

    getCount(): number {
        return this.productsArray.length;
    }
}

var product1 = new Product('product1', 100);
var product2 = new Product('product2', 200);

var scalesStorageEngineArray = new ScalesStorageEngineArray;

this.scalesStorageEngineArray.addItem(product1);
this.scalesStorageEngineArray.addItem(product2);

var scaleArray = new Scales<ScalesStorageEngineArray>();

this.scaleArray.add(this.scalesStorageEngineArray);

console.log('Общий вес: ' + this.scaleArray.getSumScale() + 'г');
console.log('На весах есть: ' + this.scaleArray.getNameList());

// class Apple extends Product { }
// class Tomato extends Product { }
// class Orange extends Product { }

// var scale: Scales = new Scales();

// var apple1: Apple = new Apple('Любимое', 110);
// var apple2: Apple = new Apple('Минское', 90);

// var tomato1: Tomato = new Tomato('Сливка', 50);
// var tomato2: Tomato = new Tomato('Белорусские', 70);

// var orange1: Orange = new Orange('Orange1', 120);
// var orange2: Orange = new Orange('Orange2', 220);

// scale.add(apple1);
// scale.add(apple2);
// scale.add(tomato1);
// scale.add(tomato2);
// scale.add(orange1);
// scale.add(orange2);

// console.log('Общий вес: ' + scale.getSumScale() + 'г');
// console.log('На весах есть: ' + scale.getNameList());

