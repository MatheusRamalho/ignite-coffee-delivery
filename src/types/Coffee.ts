import { StaticImageData } from 'next/image'

export interface CoffeeType {
    id: string
    image: StaticImageData
    name: string
    description: string
    price: string
    types: string[]
}
