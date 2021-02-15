import Customer from "./customer";
import { invoiceConfig } from "./config";
export default class Invoice extends Customer
{
    invoiceid:number;
    amount:number;
    constructor(obj:invoiceConfig)
    {
        super(obj.customer);
        this.invoiceid=obj.id;
        this.amount=obj.amount;
    }
    getinvoiceID():number{
        return this.invoiceid;   
    }
    getCustomer():Customer{
        return super.getCustomer();
    }
    setCustomer(customer:Customer):void{
        super.setcustomerID(customer.customerid);
        super.setName(customer.name);
        super.setDiscount(customer.discount);
    }
    getAmount():string{
        return `${this.amount}`;
    }
    setAmount(amount:number):void{
        this.amount=amount;
    }
    getCustomerName():string{
        return `${super.getName()}`;
    }
    getAmountAfterDiscount():number{
        return (this.amount-(super.getDiscount()*this.amount/100));
    }

}