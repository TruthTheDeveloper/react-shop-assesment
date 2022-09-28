export interface productItemType {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface CartTypes {
  id: number;
  title: string;
  subtitle: string;
  detail: string;
  price: number;
  image: string;
  color: string[];
  size: string[];
  selectedColor: string;
  selectedSize: string;
  qty: number;
}

export type allProductAndCartTypes = {
  id: number;
  title: string;
  subtitle: string;
  detail: string;
  price: number;
  image: string;
  color: string[];
  size: string[];
};


export interface PaymentRef {
  message: string;
  redirecturl: string;
  reference: number;
  status: string;
  trans: number;
  transaction: number;
  trxref: number;
}
