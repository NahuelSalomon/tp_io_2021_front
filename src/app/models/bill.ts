import { Sale } from "./sale";

export class Bill {

    id: number;
    sales: Array<Sale>;
    date: Date;
    total: number;

    constructor(id?: number, sales?: Array<Sale>, date?: Date, total?: number) {
        this.id = id;
        this.sales = sales;
        this.date = date;
        this.total = total;
    }

}
