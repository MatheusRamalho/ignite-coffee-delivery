import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

import { Icon } from './Icon'

const cartVariant = tv({
    base: 'p-2 rounded-md flex items-center justify-center gap-2',
    variants: {
        variant: {
            primary: 'bg-primary-400 text-primary-600',
            secondary: 'bg-secondary-600 text-secondary-400',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

interface CartIconProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof cartVariant> {}

export function CartIcon({ variant, className, ...rest }: CartIconProps) {
    return (
        <button
            className={twMerge(cartVariant({ variant }), className)}
            {...rest}
        >
            <Icon name="shopping-cart" />
        </button>
    )
}
