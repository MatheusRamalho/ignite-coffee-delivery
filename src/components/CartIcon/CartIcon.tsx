import { ButtonHTMLAttributes } from 'react'

import { Icon } from '../Icon'

interface CartIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary'
}

export function CartIcon({ variant }: CartIconProps) {
    return (
        <button
            className={`p-2 rounded-md flex items-center justify-center gap-2 ${
                variant === 'primary' && 'bg-primary-400 text-primary-600'
            } ${
                variant === 'secondary' && 'bg-secondary-600 text-secondary-400'
            }`}
        >
            <Icon name="shopping-cart" />
        </button>
    )
}
