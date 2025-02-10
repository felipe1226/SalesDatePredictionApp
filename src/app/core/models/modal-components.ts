import { ModalComponentInterface } from "../interfaces/modal.interface";

export const MODAL_VIEWS: ModalComponentInterface = 
{ 
    ordersView: { className: 'OrdersViewComponent', lazy: () => import('../page/orders-view/orders-view.component')},
    newOrderView: { className: 'NewOrderFormComponent', lazy: () => import('../page/new-order-form/new-order-form.component')},
} 