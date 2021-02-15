import Account from "./account";
import Invoice from "./invoice";
import { customerConfig,invoiceConfig,accountConfig } from "./config";
document.getElementById('content').hidden=true;
(<HTMLButtonElement>document.getElementById('btn')).onclick=()=>{
    let id=+((<HTMLInputElement>document.getElementById('custid')).value);
    let name=(<HTMLInputElement>document.getElementById('custname')).value;
    let discount=+((<HTMLInputElement>document.getElementById('custdiscount')).value);

    let customer:customerConfig={
        id,name,discount
    }
    
    id=+((<HTMLInputElement>document.getElementById('invoiceid')).value);
    let amount=+((<HTMLInputElement>document.getElementById('amount')).value);

    let invoice:invoiceConfig={
        id,customer,amount
    }
    let invoiceobj=new Invoice(invoice);

    id=+((<HTMLInputElement>document.getElementById('accountid')).value);
    let balance=+((<HTMLInputElement>document.getElementById('balance')).value);
    
    
    let account:accountConfig=(balance)?{id,customer,balance}:{id,customer};

    let accountobj=new Account(account);

    document.getElementById('custid1').innerText=`${invoiceobj.getcustomerID()}`;
    document.getElementById('custname1').innerText=`${invoiceobj.getCustomerName()}`;
    document.getElementById('custdiscount1').innerText=`${invoiceobj.getDiscount()}%`;
    document.getElementById('invoiceid1').innerText=`${invoiceobj.getinvoiceID()}`;
    document.getElementById('amount1').innerText=`${invoiceobj.getAmount()}`;
    document.getElementById('aad1').innerText=`${invoiceobj.getAmountAfterDiscount()}`;
    document.getElementById('accountid1').innerText=`${accountobj.getaccountID()}`;
    document.getElementById('balance1').innerText=`Rs.${accountobj.getBalance()}`;
    document.getElementById('content').hidden=false;
    
    (<HTMLButtonElement>document.getElementById('withdraw')).onclick=()=>{
        let transaction_value=+((<HTMLInputElement>document.getElementById('transaction')).value);
        let before_transaction=accountobj.getBalance();
        let after_transaction=accountobj.withdraw(transaction_value);
        if(after_transaction.balance==before_transaction)
        {
            document.getElementById('balance1').innerText=`Rs.${after_transaction.balance} (Cannot perform the transaction due to insufficient balnce!)`;
        }
        else{
            document.getElementById('balance1').innerText=`Rs.${after_transaction.balance} (Amount Withdrawn Successfully!)`;
        }
    }
    (<HTMLButtonElement>document.getElementById('deposit')).onclick=()=>{
        let transaction_value=+((<HTMLInputElement>document.getElementById('transaction')).value);
        let after_transaction=accountobj.deposit(transaction_value);
        document.getElementById('balance1').innerText=`Rs.${after_transaction.balance} (Amount deposited Successfully!)`;
    }
}