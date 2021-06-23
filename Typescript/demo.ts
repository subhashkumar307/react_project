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


//Second Program

// interface IProduct
// {
//     Name:string;
//     Price:number;
//     Stock:boolean;
//     ShippedTo?:string;
// }
// let product:IProduct = {
//     Name: "Samsung TV",
//     Price: 45000.25,
//     Stock: true,
// }
// document.write(`Name=${product.Name}<br>Price=${product.Price}<br>Stock=${product.Stock}`);

//Third Program

interface IProduct
{
    Name:string;
    Price:number;
    Qty:number;
    Total():number;
    Print():void;
}
abstract class Product implements IProduct
{
    public Name;
    public Price;
    public Qty;
    public Total():number {
        return this.Qty * this.Price;
    }
    abstract Print():void;
}
class  ProductComponent extends Product
{
    Name = "Samsung TV";
    Price = 45025.55;
    Qty = 2;
    Total(){
        return this.Qty * this.Price;
    }
    public Print():void {
        document.write(`Name=${this.Name}<br>Price=${this.Price}<br>Qty=${this.Qty}<br>Total=${this.Total}`)
    }
}