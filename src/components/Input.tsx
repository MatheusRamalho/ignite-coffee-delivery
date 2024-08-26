import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'

const inputVariant = tv({
    base: [
        'h-14 py-0 px-4 border-2 bg-base-300 border-base-400 rounded bg-transparent',
        'focus-visible:outline-none focus-visible:border-primary-500',
        'placeholder:text-xs placeholder:tracking-widest placeholder:text-base-600',
        'disabled:cursor-not-allowed disabled:bg-stone-100 ',
    ],
    variants: {
        variant: {
            full: 'w-full',
            fit: 'w-fit',
        },
    },
    defaultVariants: {
        variant: 'fit',
    },
})

interface InputProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariant> {}

export function Input({ variant, className, ...props }: InputProps) {
    return (
        <input
            className={twMerge(inputVariant({ variant }), className)}
            {...props}
        />
    )
}
