
export type ModalViews = 'ordersView' | 'newOrderView'

export type ModalComponentInterface = Record<ModalViews, { className: string, lazy: () => Promise<any>}>

export interface ModalData{
    title: string
    view: ModalViews,
    customerId: number
}