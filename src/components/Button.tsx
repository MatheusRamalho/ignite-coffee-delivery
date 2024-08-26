import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariant = tv({
    base: 'flex items-center justify-center gap-2 rounded-lg hover:cursor-pointer',
    variants: {
        variant: {
            primary:
                'w-full h-16 px-10 font-bold text-xl text-white bg-primary-500 hover:bg-primary-600',
            secondary:
                'w-fit h-auto py-2 px-4 uppercase text-base-700 bg-base-400 hover:bg-base-500',
        },
    },
    defaultVariants: {
        variant: 'primary',
    },
})

interface ButtonProps
    extends ComponentProps<'button'>,
        VariantProps<typeof buttonVariant> {
    children?: ReactNode
}

export function Button({
    children,
    variant,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            className={twMerge(buttonVariant({ variant }), className)}
            {...props}
        >
            {children}
        </button>
    )
}
