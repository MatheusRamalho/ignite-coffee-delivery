'use client'

import { useCart } from '@/hooks/useCart'
import { COFFEES_DATA } from '@/data/coffees'
import { CatalogItem } from '@/components/CatalogItem'

export function Products() {
    const { cartItems } = useCart()

    return (
        <section className="w-full h-full py-32 px-8">
            <h6 hidden> Session coffees </h6>

            <pre className="text-xs">
                <code> {JSON.stringify(cartItems, null, 2)} </code>
            </pre>

            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-20"> Nosso cafés </h2>

                <div className="flex items-center gap-10 flex-wrap justify-center">
                    {COFFEES_DATA &&
                        COFFEES_DATA.length > 0 &&
                        COFFEES_DATA.map((element) => {
                            return (
                                <CatalogItem
                                    key={element.id}
                                    id={element.id}
                                    image={element.image}
                                    name={element.name}
                                    description={element.description}
                                    price={element.price}
                                    types={element.types}
                                />
                            )
                        })}
                </div>
            </div>
        </section>
    )
}
