import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'
import { twMerge } from 'tailwind-merge'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
}

export function Icon({ name, ...props }: IconProps) {
    const LucideIcon = useMemo(() => dynamic(dynamicIconImports[name]), [name])

    return (
        <LucideIcon
            strokeWidth={1}
            className={twMerge(props.className)}
            {...props}
        />
    )
}
