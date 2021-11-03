import { Product } from "./product";

export class Sale {
    id: number;
    product: Product;
    quantity: number;
    subtotal: number;
    date: Date;

    constructor(id?: number, product?: Product, quantity?: number, subtotal?: number, date?: Date) {
        this.id = id;
        this.product = product;
        this.quantity = quantity;
        this.subtotal = subtotal;
        this.date = date;
    }


}

