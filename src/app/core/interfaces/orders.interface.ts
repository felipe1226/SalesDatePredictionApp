export interface NewOrderDTO {
    customerId: number;
    empId: number;
    shipperId: number;
    shipName: string;
    shipAddress: string;
    shipCity: string;
    orderDate: Date;
    requiredDate: Date;
    shippedDate: Date;
    freight: number;
    shipCountry: string;
    productId: number;
    unitPrice: number;
    qty: number;
    discount: number;
}

export interface OrderDTO {
    orderId: number;
    requiredDate: string;
    shippedDate?: string;
    shipName: string;
    shipAddress: string;
    shipCity: string;
}

export interface SalesDatePredictionDTO {
    customerId: number;
    customerName: string;
    lastOrderDate: string;
    nextPredictedOrder: string;
}


export interface OrderFiltersDTO{
    customerName?: string
}