import Image, { StaticImageData } from 'next/image'

import { Badge } from './Badge'
import { CartIcon } from './CartIcon'
import { Countdown } from './Countdown'

export interface CatalogItemProps {
    id: string
    image: StaticImageData
    name: string
    description?: string
    price: string
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
    function handleAddToCart() {
        console.log('Adicionou ao carrinho')
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
                    <span className="text-2xl font-bold"> {price} </span>
                </div>

                <div className="flex items-center justify-center gap-2">
                    <Countdown />
                    <CartIcon variant="secondary" onClick={handleAddToCart} />
                </div>
            </div>
        </article>
    )
}
