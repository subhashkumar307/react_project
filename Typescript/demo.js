// First Program
// let userName:string;
// userName = prompt("Enter Name");
// if(userName==null){
//     document.write("You Canceled..");
// } else if (userName=="") {
//     document.write("Name can't be Empty");
// } else {
//     document.write("Hello !" + userName);
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Product = /** @class */ (function () {
    function Product() {
    }
    Product.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    return Product;
}());
var ProductComponent = /** @class */ (function (_super) {
    __extends(ProductComponent, _super);
    function ProductComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Name = "Samsung TV";
        _this.Price = 45025.55;
        _this.Qty = 2;
        return _this;
    }
    ProductComponent.prototype.Total = function () {
        return this.Qty * this.Price;
    };
    ProductComponent.prototype.Print = function () {
        document.write("Name=" + this.Name + "<br>Price=" + this.Price + "<br>Qty=" + this.Qty + "<br>Total=" + this.Total);
    };
    return ProductComponent;
}(Product));
