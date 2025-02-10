import { ColumnInterface } from "../interfaces/columns.interface";

export const SALES_COLUMNS: ColumnInterface[] = [
    {
        column: 'customerName',
        label: 'Customer Name'
    },
    {
        column: 'lastOrderDate',
        label: 'Last Order Date'
    },
    {
        column: 'nextPredictedOrder',
        label: 'Next Predicted Order'
    },
    {
        column: 'actions',
        label: ''
    }
]


export const ORDER_COLUMNS: ColumnInterface[] = [
    {
        column: 'orderId',
        label: 'Order ID'
    },
    {
        column: 'requiredDate',
        label: 'Required Date'
    },
    {
        column: 'shippedDate',
        label: 'Shipped Date'
    },
    {
        column: 'shipName',
        label: 'Ship Name'
    },
    {
        column: 'shipAddress',
        label: 'Ship Address'
    },
    {
        column: 'shipCity',
        label: 'Ship City'
    }
]