'use client'

import Image from 'next/image'
import Link from 'next/link'

import { useCart } from '@/hooks/useCart'
import { Icon } from './Icon'
import { CartIcon } from './CartIcon'
import brandImg from '@/assets/imgs/logo.png'

export function Navbar() {
    const { cartItems } = useCart()

    const totalQuantity =
        cartItems.length > 0
            ? cartItems.reduce((acc, item) => acc + item.quantity, 0)
            : undefined

    return (
        <header className="w-full h-24 border-b border-b-gray-100">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <Link className="" href="/">
                    <Image
                        className="h-10"
                        src={brandImg}
                        alt="Cofee Delivery"
                    />
                </Link>

                <nav className="">
                    <ul className="flex items-center justify-center gap-4">
                        <li className="p-2 text-xs sm:text-base rounded-md flex items-center justify-center gap-2 bg-secondary-400 text-secondary-500">
                            <Icon name="map-pin" />
                            <span className=""> Minas Gerais, MG </span>
                        </li>

                        <li>
                            <Link className="" href="cart">
                                <CartIcon
                                    variant="primary"
                                    quantity={totalQuantity}
                                />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
