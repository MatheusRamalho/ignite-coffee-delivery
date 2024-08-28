import { CartItemType } from '@/contexts/CartContext'

interface PriceFormatProps {
    priceInCents: number
    style?: 'currency' | 'decimal' | 'percent' | 'unit'
}

export function priceFormat({ priceInCents, style }: PriceFormatProps): string {
    if (priceInCents === undefined || priceInCents === null || priceInCents < 0)
        return 'Não definido'

    const formatted = (priceInCents / 100).toLocaleString('pt-BR', {
        style: style || undefined,
        currency: 'BRL',
        minimumFractionDigits: 2,
    })

    return formatted
}

interface CalculateTotalPriceProps {
    priceInCents: number
    quantity: number
    style?: 'currency' | 'decimal' | 'percent' | 'unit'
}

export function calculateTotalPrice({
    priceInCents,
    quantity,
    style,
}: CalculateTotalPriceProps): string {
    if (priceInCents <= 0 || quantity <= 0) return 'Não definido'

    const totalInCents = priceInCents * quantity
    const totalInReais = totalInCents / 100

    const formattedTotal = totalInReais.toLocaleString('pt-BR', {
        style: style || undefined,
        currency: 'BRL',
        minimumFractionDigits: 2,
    })

    return formattedTotal
}

interface CalculateCartTotalPriceProps {
    cartItems: CartItemType[]
    style?: 'currency' | 'decimal' | 'percent' | 'unit'
}

export function calculateCartTotalPrice({
    cartItems,
}: CalculateCartTotalPriceProps): number {
    if (cartItems.length === 0) return 0

    const totalInCents = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity
    }, 0)

    return totalInCents
}
