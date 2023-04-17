export default interface IPanigation<T>{
    total:number;
    page:number;
    pageSize:number;
    items:T[]
}