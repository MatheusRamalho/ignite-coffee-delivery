import Image from 'next/image'

import { Icon } from './Icon'
import { CartIcon } from './CartIcon'

import brandImg from '@/assets/imgs/logo.png'

export function Navbar() {
    return (
        <header className="w-full h-24 border-b border-b-gray-100">
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <div className="">
                    <Image
                        className="h-10"
                        src={brandImg}
                        alt="Cofee Delivery"
                    />
                </div>

                <nav className="">
                    <ul className="flex items-center justify-center gap-4">
                        <li className="p-2 text-xs sm:text-base rounded-md flex items-center justify-center gap-2 bg-secondary-400 text-secondary-500">
                            <Icon name="map-pin" />
                            <span className=""> Minas Gerais, MG </span>
                        </li>

                        <li>
                            <CartIcon variant="primary" />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
