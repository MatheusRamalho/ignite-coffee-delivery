/* eslint-disable @typescript-eslint/no-explicit-any */
import { InputHTMLAttributes } from 'react'
import { Control, Controller } from 'react-hook-form'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { twMerge } from 'tailwind-merge'

import { Icon } from '../Icon'

interface InputControlRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    icon: keyof typeof dynamicIconImports
    control: Control<any>
    text: string
    name: string
    value: string
}

export function InputControlRadio({
    icon,
    text,
    value,
    name,
    control,
    className,
    ...rest
}: InputControlRadioProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({
                field: { value: fieldValue, onChange, ref, ...field },
            }) => (
                <label
                    className={twMerge(
                        'flex items-center justify-center gap-2 w-fit p-5 bg-base-400 rounded-md uppercase text-base-700 hover:cursor-pointer hover:bg-base-500',
                    )}
                >
                    <input
                        {...rest}
                        {...field}
                        type="radio"
                        ref={ref}
                        value={value}
                        checked={fieldValue === value}
                        onChange={onChange}
                        className={twMerge(className)}
                    />

                    <Icon name={icon} className="text-secondary-500" />

                    {text}
                </label>
            )}
        />
    )
}
