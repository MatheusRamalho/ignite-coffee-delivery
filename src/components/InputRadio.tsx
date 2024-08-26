import { InputHTMLAttributes } from 'react'

import { Icon } from './Icon'

interface InputRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any
    text: string
}

export function InputRadio({ icon, text, ...props }: InputRadioProps) {
    return (
        <label className="flex items-center justify-center gap-2 w-fit p-5 bg-base-400 rounded-md uppercase text-base-700 hover:cursor-pointer hover:bg-base-500">
            <input type="radio" {...props} />

            <Icon name={icon} className="text-secondary-500" />

            {text}
        </label>
    )
}
