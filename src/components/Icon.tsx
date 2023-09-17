import { lazy } from 'react'

import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface IconProps extends LucideProps {
    name: keyof typeof dynamicIconImports
    customClass?: string
}

export const Icon = ({ name, customClass, ...props }: IconProps) => {
    const LucideIcon = lazy(dynamicIconImports[name])

    return <LucideIcon className={customClass} {...props} />
}

// name="MapPin"
// name="Trash2"
// name="DollarSign"
// name="ShoppingCart"
// name="Timer"
// name="Package"
// name="Coffee"
// name="Plus"
// name="Minus"
// name="CreditCard"
// name="Banknote"
// name="Landmark"
