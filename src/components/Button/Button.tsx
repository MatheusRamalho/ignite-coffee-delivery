import { ComponentProps, ReactNode } from 'react'

// interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
interface ButtonProps extends ComponentProps<'button'> {
    variant?: 'primary' | 'secondary'
    customClass?: string
    children?: ReactNode
}

export function Button({
    variant = 'primary',
    customClass,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            data-testid="button"
            className={`flex items-center justify-center gap-2 rounded-lg hover:cursor-pointer
                ${
                    variant === 'primary' &&
                    'w-full h-16 px-10 font-bold text-xl text-white bg-primary-500 hover:bg-primary-600'
                }
                ${
                    variant === 'secondary' &&
                    'w-fit h-auto py-2 px-4 uppercase text-base-700 bg-base-400 hover:bg-base-500'
                }
                ${customClass}
            `}
            {...props}
        >
            {children}
        </button>
    )
}
