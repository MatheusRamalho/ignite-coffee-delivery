'use client'

import Image, { StaticImageData } from 'next/image'

import { Button } from './Button'
import { Countdown } from './Countdown'
import { Icon } from './Icon'

export interface CartItemProps {
    id: string
    image: StaticImageData
    name: string
    price: string
    onClick: () => void
}

export function CartItem({ id, image, name, price, onClick }: CartItemProps) {
    return (
        <article
            id={id}
            className="p-8 bg-base-200 border-b border-b-base-400 flex items-center justify-start gap-6"
        >
            <div className="w-16 h-16 flex items-center justify-center ">
                <Image
                    className="w-16 h-16"
                    src={image}
                    alt={name}
                    title={name}
                />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                    <h6 className="text-base-800"> {name} </h6>
                    <span className="text-base-700 font-bold">
                        {' '}
                        R$ {price}{' '}
                    </span>
                </div>

                <div className="">
                    <div className="flex items-center justify-center gap-2">
                        <Countdown />

                        <Button
                            variant="secondary"
                            type="button"
                            onClick={onClick}
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
