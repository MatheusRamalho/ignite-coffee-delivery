import { InputHTMLAttributes } from 'react'

import { Icon } from '../Icon'

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    text: string
}

export function InputRadio({ icon, text, ...props }: InputRadioProps) {
    return (
        <label className="flex items-center justify-center gap-2 w-fit p-5 bg-base-400 rounded-md uppercase text-base-700 hover:cursor-pointer hover:bg-base-500">
            <input
                type="radio"
                // className="w-fit h-14 py-0 px-4 border-2 bg-base-300 border-base-400 rounded bg-transparent
                // focus-visible:outline-none focus-visible:border-primary-500
                // placeholder:text-xs placeholder:tracking-widest placeholder:text-base-600
                // disabled:cursor-not-allowed disabled:bg-stone-100"
                {...props}
            />

            <Icon name={icon} className="text-secondary-500" />

            {text}
        </label>
    )
}
