import { ButtonHTMLAttributes } from 'react'
import { tv, VariantProps } from 'tailwind-variants'
import { twMerge } from 'tailwind-merge'

import { Icon } from './Icon'

const cartVariant = tv({
    base: 'relative p-2 rounded-md flex items-center justify-center gap-2',
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
        VariantProps<typeof cartVariant> {
    quantity?: number
}

export function CartIcon({
    quantity,
    variant,
    className,
    ...rest
}: CartIconProps) {
    return (
        <button
            className={twMerge(cartVariant({ variant }), className)}
            {...rest}
        >
            <Icon name="shopping-cart" />

            {quantity && (
                <div className="absolute -top-2 -right-2 bg-red-500 rounded-full size-5 flex items-center justify-center">
                    <span className="text-white text-xs font-medium">
                        {quantity}
                    </span>
                </div>
            )}
        </button>
    )
}
