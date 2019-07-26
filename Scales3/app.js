var Scales = /** @class */ (function () {
    function Scales() {
        this.storageEngineArray = [];
    }
    Scales.prototype.add = function (storageEngine) {
        this.storageEngineArray.push(storageEngine);
    };
    Scales.prototype.getSumScale = function () {
        var productsWeight = 0;
        this.storageEngineArray.forEach(function (storageEngine) {
            for (var i = 0; i < storageEngine.getCount(); i++) {
                productsWeight += storageEngine.getItem(i).getScale();
            }
        });
        return productsWeight;
    };
    Scales.prototype.getNameList = function () {
        var productsNameList = [];
        this.storageEngineArray.forEach(function (storageEngine) {
            for (var i = 0; i < storageEngine.getCount(); i++) {
                productsNameList.push(storageEngine.getItem(i).getName());
            }
        });
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
//# sourceMappingURL=app.js.map