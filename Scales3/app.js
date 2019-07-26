var Scales = /** @class */ (function () {
    function Scales() {
        this.storageEngine = null;
    }
    Scales.prototype.add = function (storageEngine) {
        this.storageEngine = storageEngine;
    };
    Scales.prototype.getSumScale = function () {
        var productsWeight = 0;
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            productsWeight += this.storageEngine.getItem(i).getScale();
        }
        return productsWeight;
    };
    Scales.prototype.getNameList = function () {
        var productsNameList = [];
        for (var i = 0; i < this.storageEngine.getCount(); i++) {
            productsNameList.push(this.storageEngine.getItem(i).getName());
        }
        return productsNameList;
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Product.prototype.getName = function () {
        return this.name;
    };
    Product.prototype.getScale = function () {
        return this.weight;
    };
    return Product;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.productsArray = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (product) {
        this.productsArray.push(product);
    };
    ScalesStorageEngineArray.prototype.getItem = function (id) {
        return this.productsArray[id];
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return this.productsArray.length;
    };
    return ScalesStorageEngineArray;
}());
localStorage.clear();
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
        this.partKey = 'product';
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (product) {
        var key = this.partKey + this.getCount();
        localStorage.setItem(key, JSON.stringify(product));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (id) {
        var key = this.partKey + id;
        var parsedObject = JSON.parse(localStorage.getItem(key));
        return new Product(parsedObject.name, parsedObject.weight);
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        return localStorage.length;
    };
    return ScalesStorageEngineLocalStorage;
}());
var product1 = new Product('product1', 100);
var product2 = new Product('product2', 200);
var scalesStorageEngineArray = new ScalesStorageEngineArray;
var scalesStorageEngineLocalStorage = new ScalesStorageEngineLocalStorage;
this.scalesStorageEngineArray.addItem(product1);
this.scalesStorageEngineArray.addItem(product2);
this.scalesStorageEngineLocalStorage.addItem(product1);
var scaleArray = new Scales();
var scaleLocalStorage = new Scales();
this.scaleArray.add(this.scalesStorageEngineArray);
this.scaleLocalStorage.add(this.scalesStorageEngineLocalStorage);
console.log('Общий вес в массиве: ' + this.scaleArray.getSumScale() + 'г');
console.log('На весах в массиве есть: ' + this.scaleArray.getNameList());
console.log('Общий вес в localStorage: ' + this.scaleLocalStorage.getSumScale() + 'г');
console.log('На весах в localStorage есть: ' + this.scaleLocalStorage.getNameList());
//# sourceMappingURL=app.js.map