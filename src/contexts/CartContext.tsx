'use client'

import { createContext, ReactNode, useState } from 'react'

import { CoffeeType } from '@/types/Coffee'

interface CartContextProps {
    cart: Array<CoffeeType>
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart] = useState<CoffeeType[]>([])

    return (
        <CartContext.Provider
            value={{
                cart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
