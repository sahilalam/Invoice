
export interface customerConfig{
    id:number;
    name:string;
    discount:number;
}
export interface invoiceConfig{
    id:number;
    customer:customerConfig;
    amount:number;
}
export interface accountConfig{
    id:number;
    customer:customerConfig;
    balance?:number;
}