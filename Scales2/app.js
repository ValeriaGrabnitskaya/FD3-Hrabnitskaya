var Scales = /** @class */ (function () {
    function Scales() {
        this.productsArray = [];
    }
    Scales.prototype.add = function (product) {
        this.productsArray.push(product);
    };
    Scales.prototype.getSumScale = function () {
        var productsWeight = 0;
        this.productsArray.forEach(function (product) {
            productsWeight += product.getScale();
        });
        return productsWeight;
    };
    Scales.prototype.getNameList = function () {
        var productsNameList = [];
        this.productsArray.forEach(function (product) {
            productsNameList.push(product.getName());
        });
        return productsNameList;
    };
    return Scales;
}());
var Apple = /** @class */ (function () {
    function Apple(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Apple.prototype.getName = function () {
        return this.name;
    };
    Apple.prototype.getScale = function () {
        return this.weight;
    };
    return Apple;
}());
var Tomato = /** @class */ (function () {
    function Tomato(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Tomato.prototype.getName = function () {
        return this.name;
    };
    Tomato.prototype.getScale = function () {
        return this.weight;
    };
    return Tomato;
}());
var Orange = /** @class */ (function () {
    function Orange(_name, _weight) {
        this.name = _name;
        this.weight = _weight;
    }
    Orange.prototype.getName = function () {
        return this.name;
    };
    Orange.prototype.getScale = function () {
        return this.weight;
    };
    return Orange;
}());
var scale = new Scales();
var apple1 = new Apple('Любимое', 110);
var apple2 = new Apple('Минское', 90);
var tomato1 = new Tomato('Сливка', 50);
var tomato2 = new Tomato('Белорусские', 70);
var orange1 = new Orange('Orange1', 120);
var orange2 = new Orange('Orange2', 220);
scale.add(apple1);
scale.add(apple2);
scale.add(tomato1);
scale.add(tomato2);
scale.add(orange1);
scale.add(orange2);
console.log('Общий вес: ' + scale.getSumScale() + 'г');
console.log('На весах есть: ' + scale.getNameList());
//# sourceMappingURL=app.js.map