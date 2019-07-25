var Scales = /** @class */ (function () {
    function Scales() {
        this.storageEngineArray = [];
    }
    Scales.prototype.add = function (storageEngine) {
        this.storageEngineArray.push(storageEngine);
    };
    Scales.prototype.getSumScale = function () {
        var productsWeight = 0;
        this.storageEngineArray.forEach(function (storageEngine, index) {
            productsWeight += storageEngine.getItem(index).getScale();
        });
        return productsWeight;
    };
    Scales.prototype.getNameList = function () {
        var productsNameList = [];
        this.storageEngineArray.forEach(function (storageEngine, index) {
            productsNameList.push(storageEngine.getItem(index).getName());
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
var product1 = new Product('product1', 100);
var product2 = new Product('product2', 200);
var scalesStorageEngineArray = new ScalesStorageEngineArray;
this.scalesStorageEngineArray.addItem(product1);
this.scalesStorageEngineArray.addItem(product2);
var scaleArray = new Scales();
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
//# sourceMappingURL=app.js.map