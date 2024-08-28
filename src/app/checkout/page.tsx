'use client'

import { useCart } from '@/hooks/useCart'
import { calculateCartTotalPrice, priceFormat } from '@/utils/price'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { AddressForm } from './modules/address'

export default function Checkout() {
    const { cartItems } = useCart()

    const priceDelivery = 350

    const priceTotalItens =
        cartItems && cartItems.length > 0
            ? calculateCartTotalPrice({ cartItems })
            : 0

    const priceTotalOrder = priceTotalItens + priceDelivery

    return (
        <section className="w-full h-full py-32 px-8">
            <h6 hidden> Checkout </h6>

            <div className="container mx-auto flex items-start gap-8">
                <AddressForm />

                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-2">
                        Cafés selecionados
                    </h2>

                    <div className="p-10 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-200 flex flex-col gap-8">
                        <div className="">
                            {cartItems &&
                                cartItems.length > 0 &&
                                cartItems.map((element) => {
                                    return (
                                        <CartItem
                                            key={element.id}
                                            id={element.id}
                                            image={element.image}
                                            name={element.name}
                                            description={element.description}
                                            types={element.types}
                                            price={element.price}
                                            qt={element.quantity}
                                        />
                                    )
                                })}
                        </div>

                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between text-base-700">
                                <span className=""> Total de itens </span>

                                <span className="">
                                    R${' '}
                                    {priceFormat({
                                        priceInCents: priceTotalItens,
                                    })}{' '}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-base-700">
                                <span className=""> Entrega </span>

                                <span className="">
                                    R${' '}
                                    {priceFormat({
                                        priceInCents: priceDelivery,
                                    })}{' '}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-base-800 text-xl font-bold">
                                <span className=""> Total </span>

                                <span className="">
                                    R${' '}
                                    {priceFormat({
                                        priceInCents: priceTotalOrder,
                                    })}{' '}
                                </span>
                            </div>
                        </div>

                        <Button type="submit"> Confirmar Pedido </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
