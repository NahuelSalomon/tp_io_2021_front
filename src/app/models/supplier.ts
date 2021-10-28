export class Supplier {
    id: number;
    name: string;
    phoneNumber: number;
    isPresale: boolean;
    leadTime: number;
    reviewPeriod: number;
    lastReview: Date;
    
    constructor(id?: number, name?: string, phoneNumber?: number, isPresale?: boolean, leadTime?: number, reviewPeriod?: number, lastReview?: Date) {
        this.id = id!;
        this.name = name!;
        this.phoneNumber = phoneNumber!;
        this.isPresale = isPresale!;
        this.leadTime = leadTime!;
        this.reviewPeriod = reviewPeriod!;
        this.lastReview = lastReview!;
    }
}
