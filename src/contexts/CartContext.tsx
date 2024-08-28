'use client'

import { createContext, ReactNode, useState } from 'react'

import { Coffee } from '@/types/Coffee'

export interface CartItemType extends Coffee {
    quantity: number
}

interface CartContextProps {
    cartItems: CartItemType[]
    addItemToCart: (item: Coffee, quantity: number) => void
    removeItemFromCart: (id: string) => void
    clearCart: () => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItemType[]>([])

    function addItemToCart(item: Coffee, quantity: number) {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(
                (cartItem) => cartItem.id === item.id,
            )

            if (existingItem) {
                return prevItems.map((cartItem) =>
                    cartItem.id === item.id
                        ? {
                              ...cartItem,
                              quantity: cartItem.quantity + quantity,
                          }
                        : cartItem,
                )
            }

            return [...prevItems, { ...item, quantity }]
        })
    }

    function removeItemFromCart(id: string) {
        setCartItems((prevItems) =>
            prevItems.filter((cartItem) => cartItem.id !== id),
        )
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addItemToCart,
                removeItemFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
