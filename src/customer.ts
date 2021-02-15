import { customerConfig } from "./config";
export default class Customer
{
    customerid:number;
    name:string;
    discount:number;
    constructor(obj:customerConfig)
    {
        this.customerid=obj.id;
        this.name=obj.name;
        this.discount=obj.discount;
    }
    getcustomerID():number{
        return this.customerid;   
    }
    setcustomerID(id:number):void{
        this.customerid=id;
    }
    getName():string{
        return this.name;
    }
    setName(name:string):void{
        this.name=name;
    }
    getDiscount():number{
        return this.discount;
    }
    setDiscount(discount:number):void{
        this.discount=discount;
    }
    toString():string{
        return `${this.name}(${this.customerid})`;
    }
    getCustomer():Customer{
        return this;
    }

}