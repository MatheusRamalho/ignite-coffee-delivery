import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isNotFull?: boolean
}

export function Input({ isNotFull = false, ...props }: InputProps) {
    return (
        <input
            className={`h-14 py-0 px-4 border-2 bg-base-300 border-base-400 rounded bg-transparent
                focus-visible:outline-none focus-visible:border-primary-500
                placeholder:text-xs placeholder:tracking-widest placeholder:text-base-600
                disabled:cursor-not-allowed disabled:bg-stone-100 ${
                    isNotFull ? 'w-fit' : 'w-full'
                }`}
            {...props}
        />
    )
}
