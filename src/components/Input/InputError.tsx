import { FieldErrors } from 'react-hook-form'

interface InputErrorProps {
    error?: FieldErrors
    name: string
}

export function InputError({ error, name }: InputErrorProps) {
    return (
        <>
            {error && error[name] && (
                <span className="pl-2 italic text-xs text-red-400">
                    {error[name]?.message as string}
                </span>
            )}
        </>
    )
}
