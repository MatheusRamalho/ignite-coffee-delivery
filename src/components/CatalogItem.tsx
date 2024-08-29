'use client'

import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import { useCart } from '@/hooks/useCart'
import { CoffeeType } from '@/types/Coffee'
import { priceFormat } from '@/utils/price'
import { Badge } from './Badge'
import { CartIcon } from './CartIcon'
import { Icon } from './Icon'

export interface CatalogItemProps {
    id: string
    image: StaticImageData
    name: string
    description: string
    price: number
    types: string[]
}

export function CatalogItem({
    id,
    image,
    name,
    description,
    price,
    types,
}: CatalogItemProps) {
    const [quantity, setQuantity] = useState<number>(1)
    const { addItemToCart } = useCart()

    function handleMinusQuantity() {
        setQuantity((state) => Math.max(state - 1, 1))
    }

    function handlePlusQuantity() {
        setQuantity((state) => state + 1)
    }

    function handleAddToCart() {
        const product: CoffeeType = {
            id,
            image,
            name,
            description,
            price,
            types,
        }

        addItemToCart(product, quantity)
        // setQuantity(1)
    }

    return (
        <article
            id={id}
            className="relative w-80 p-6 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-200 hover:shadow"
        >
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-28 h-28 flex items-center justify-center ">
                <Image
                    className="w-28 h-28"
                    src={image}
                    alt={name}
                    title={name}
                />
            </div>

            <div className="mt-20 mb-8">
                <div className="flex items-center justify-center gap-1 mb-8">
                    {types.map((element) => {
                        return <Badge key="" text={element} />
                    })}
                </div>

                <div className="text-center">
                    <h4 className="text-xl font-bold text-base-800 mb-3">
                        {name}
                    </h4>

                    <p className="text-base-600"> {description} </p>
                </div>
            </div>

            <div className="flex items-center justify-between">
                <div className="text-base-700">
                    R$
                    <span className="text-2xl font-bold">
                        {' '}
                        {priceFormat({ priceInCents: price })}
                    </span>
                </div>

                <div className="flex items-center justify-center gap-2">
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

                    <CartIcon variant="secondary" onClick={handleAddToCart} />
                </div>
            </div>
        </article>
    )
}
