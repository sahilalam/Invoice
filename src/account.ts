import Customer from "./customer";
import { accountConfig } from "./config";
export default class Account extends Customer
{
    accountid:number;
    balance:number;
    constructor(obj:accountConfig)
    {
        super(obj.customer);
        this.accountid=obj.id;
        this.balance=(obj.balance!=undefined)?obj.balance:0;
    }
    getaccountID():number{
        return this.accountid;   
    }
    getBalance():number{
        return this.balance;
    }
    setBalance(balance:number):void{
        this.balance=balance;
    }
    toString():string
    {
        return `${super.toString()} `+` balance=$${this.balance.toFixed(2)}`;
    }
    deposit(amount:number):Account{
        this.balance+=amount;
        return this;
    }
    withdraw(amount:number):Account{
        if(this.balance>=amount)
        {
            this.balance-=amount;
        }
        return this;
    }
}
