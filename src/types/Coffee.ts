import { StaticImageData } from 'next/image'

export interface Coffee {
    id: string
    image: StaticImageData
    name: string
    description: string
    price: string
    types: string[]
}
