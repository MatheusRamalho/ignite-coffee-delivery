'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { useCart } from '@/hooks/useCart'
import { CoffeeType } from '@/types/Coffee'
import { calculateTotalPrice } from '@/utils/price'
import { Button } from './Button'
import { Icon } from './Icon'

export interface CartItemProps {
    id: string
    image: StaticImageData
    name: string
    description: string
    price: number
    types: string[]
    qt: number
}

export function CartItem({
    id,
    image,
    name,
    price,
    types,
    description,
    qt,
}: CartItemProps) {
    const { addItemToCart, removeItemFromCart } = useCart()
    const [quantity, setQuantity] = useState<number>(qt)

    function handleMinusQuantity() {
        setQuantity((state) => Math.max(state - 1, 1))
    }

    function handlePlusQuantity() {
        setQuantity((state) => state + 1)

        const product: CoffeeType = {
            id,
            image,
            name,
            description,
            price,
            types,
        }

        addItemToCart(product, quantity)
    }

    return (
        <article
            id={id}
            className="py-8 bg-base-200 border-b border-b-base-400 flex items-center justify-start gap-6 flex-col sm:flex-row"
        >
            <div className="w-16 h-16 flex items-center justify-center">
                <Image
                    className="w-16 h-16"
                    src={image}
                    alt={name}
                    title={name}
                />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4 flex-col sm:flex-row">
                    <h6 className="text-base-800"> {name} </h6>

                    <span className="text-base-700 font-bold">
                        R${' '}
                        {calculateTotalPrice({
                            priceInCents: price,
                            quantity,
                        })}
                    </span>
                </div>

                <div className="">
                    <div className="flex items-center justify-center gap-2 flex-col sm:flex-row">
                        <div className="flex items-center justify-between gap-3 p-2 bg-base-400 rounded-lg">
                            <button
                                className="group disabled:cursor-not-allowed hover:cursor-pointer"
                                onClick={handleMinusQuantity}
                                disabled={quantity === 1}
                            >
                                <Icon
                                    name="minus"
                                    className="text-primary-600 group-hover:text-secondary-500"
                                />
                            </button>

                            <div className=""> {quantity} </div>

                            <button
                                className="group disabled:cursor-not-allowed hover:cursor-pointer"
                                onClick={handlePlusQuantity}
                            >
                                <Icon
                                    name="plus"
                                    className="text-primary-600 group-hover:text-secondary-500"
                                />
                            </button>
                        </div>

                        <Button
                            variant="secondary"
                            type="button"
                            onClick={() => removeItemFromCart(id)}
                        >
                            <Icon
                                name="trash-2"
                                className="text-secondary-500"
                            />
                            Remover
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
}
