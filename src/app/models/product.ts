import { Supplier } from "./supplier";

export class Product {
    id: number;
    scan: string;
    model: string;
    description: string;
    supplier: Supplier;
    costUnit: number;
    costOfPreparing: number;
    storageCost: number;
    stock: number;
    modelType: number;
    serviceLevel: number;
    avgDemand: number;
    disDemand: number;
    reorderPoint:number;
    
    constructor(id?: number, scan?: string, model?: string, description?: string, supplier?: Supplier, costUnit?: number, costOfPreparing?: number, storageCost?: number, stock?: number, modelType?: number, serviceLevel?: number, avgDemand?: number, disDemand?: number, reorderPoint?:number) {
        this.id = id!;
        this.scan = scan!;
        this.model = model!;
        this.description = description!;
        this.supplier = supplier!;
        this.costUnit = costUnit!;
        this.costOfPreparing = costOfPreparing!;
        this.storageCost = storageCost!;
        this.stock = stock!;
        this.modelType = modelType!;
        this.serviceLevel = serviceLevel!;
        this.avgDemand = avgDemand!;
        this.disDemand = disDemand!;
        this.reorderPoint = reorderPoint!;
    }

}
