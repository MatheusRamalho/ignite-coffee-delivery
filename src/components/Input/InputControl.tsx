import { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'
import { tv, VariantProps } from 'tailwind-variants'
import { Control, Controller } from 'react-hook-form'

const inputVariant = tv({
    base: [
        'h-14 py-0 px-4 border-2 bg-base-300 border-base-400 rounded bg-transparent',
        'focus-visible:outline-none focus-visible:border-primary-500',
        'placeholder:text-base placeholder:tracking-widest placeholder:text-base-600',
        'disabled:cursor-not-allowed disabled:bg-stone-100 ',
    ],
    variants: {
        variant: {
            full: 'w-full',
            fit: 'w-fit',
        },
    },
    defaultVariants: {
        variant: 'full',
    },
})

interface InputControlProps
    extends InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariant> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<any>
    name: string
}

export function InputControl({
    name,
    control,
    variant,
    className,
    onBlur,
    ...rest
}: InputControlProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { value, onChange, ref, ...field } }) => (
                <input
                    {...rest}
                    {...field}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    className={twMerge(inputVariant({ variant }), className)}
                />
            )}
        />
    )
}
