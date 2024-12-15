import { ProductInCart } from "../Cart/cart.type";

export interface IOrder {
  orderNumber: string,
  totalOrder: number,
  totalSum: number,
  orderComp: ProductInCart[]
  client: {
    name: string,
    phone: string,
    email: string
  }
}