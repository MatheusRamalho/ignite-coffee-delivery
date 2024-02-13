interface BadgeProps {
    text: string
}

export function Badge({ text }: BadgeProps) {
    return (
        <span className="px-2 py-1 rounded-full bg-primary-400 uppercase font-bold text-primary-600 text-xs">
            {' '}
            {text}{' '}
        </span>
    )
}
