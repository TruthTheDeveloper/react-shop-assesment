export interface productItemType{
    id:number,
    title:string,
    price:number,
    image:string
}

export interface CartTypes{
    id:number,
    title:string,
    subtitle:string,
    detail:string,
    price:number,
    image:string,
    color: string;
    size: string;
  
}

export type  allProductAndCartTypes = {
    id:number,
    title:string,
    subtitle:string,
    detail:string,
    price:number,
    image:string,
    color: string[];
    size: string[];
  }