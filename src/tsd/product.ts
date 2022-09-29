export interface productItemType {
  id: number;
  title: string;
  price: number;
  image: string;
  inCart: boolean;
  outOfStock: boolean;
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
  inCart: boolean;
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
  inCart: boolean;
  outOfStock: boolean;
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
