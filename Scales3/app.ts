interface IStorageEngine {
    addItem(item: Product): void;
    getItem(_index: number): Product;
    getCount(): number;
}

class Scales<StorageEngine extends IStorageEngine> {

    storageEngine: StorageEngine;

    constructor() {
        this.storageEngine = null;
    }

    add(storageEngine: StorageEngine) {
        this.storageEngine = storageEngine;
    }
    getSumScale(): number {
        let productsWeight: number = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            productsWeight += this.storageEngine.getItem(i).getScale();
        }
        return productsWeight;
    }
    getNameList(): string[] {
        let productsNameList: string[] = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            productsNameList.push(this.storageEngine.getItem(i).getName());
        }
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
        this.productsArray = [];
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

localStorage.clear()

class ScalesStorageEngineLocalStorage implements IStorageEngine {

    partKey: string = 'product';

    addItem(product: Product) {
        let key: string = this.partKey + this.getCount();
        localStorage.setItem(key, JSON.stringify(product));
    }

    getItem(id: number): Product {
        let key: string = this.partKey + id;
        let parsedObject = JSON.parse(localStorage.getItem(key));
        return new Product(parsedObject.name, parsedObject.weight);
    }

    getCount(): number {
        return localStorage.length;
    }
}

var product1 = new Product('product1', 100);
var product2 = new Product('product2', 200);

var scalesStorageEngineArray = new ScalesStorageEngineArray;
var scalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage;

this.scalesStorageEngineArray.addItem(product1);
this.scalesStorageEngineArray.addItem(product2);

this.scalesStorageEngineLocalStorage.addItem(product1);

var scaleArray = new Scales<ScalesStorageEngineArray>();
var scaleLocalStorage = new Scales<ScalesStorageEngineLocalStorage>();

this.scaleArray.add(this.scalesStorageEngineArray);
this.scaleLocalStorage.add(this.scalesStorageEngineLocalStorage);


console.log('Общий вес в массиве: ' + this.scaleArray.getSumScale() + 'г');
console.log('На весах в массиве есть: ' + this.scaleArray.getNameList());

console.log('Общий вес в localStorage: ' + this.scaleLocalStorage.getSumScale() + 'г');
console.log('На весах в localStorage есть: ' + this.scaleLocalStorage.getNameList());
