var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
            productsWeight += product.weight;
        });
        return productsWeight;
    };
    Scales.prototype.getNameList = function () {
        var productsNameList = [];
        this.productsArray.forEach(function (product) {
            productsNameList.push(product.name);
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
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Apple;
}(Product));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tomato;
}(Product));
var Orange = /** @class */ (function (_super) {
    __extends(Orange, _super);
    function Orange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Orange;
}(Product));
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