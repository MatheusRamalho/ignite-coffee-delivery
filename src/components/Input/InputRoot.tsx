import { ReactNode, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface InputRootProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
}

export function InputRoot(props: InputRootProps) {
    return <div {...props} className={twMerge('w-full', props.className)} />
}
