import { CartItemType } from '@/contexts/CartContext'
import { AddressType } from './Address'

export interface OrderType {
    address: AddressType
    itens: CartItemType[]
    priceDelivery: number
    priceTotalItens: number
    priceTotalOrder: number
}
