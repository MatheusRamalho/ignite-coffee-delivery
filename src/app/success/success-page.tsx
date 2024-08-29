'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'

import { OrderType } from '@/types/Order'
import { Icon } from '@/components/Icon'
import ilustrationSvg from '@/assets/svgs/illustration.svg'

export default function SuccessPage() {
    const [order, setOrder] = useState<OrderType | null>(null)
    const searchParams = useSearchParams()

    useEffect(() => {
        const orderParam = searchParams.get('order')

        if (orderParam) {
            try {
                // Decodifica e parseia o parâmetro da query
                const decodedOrder = decodeURIComponent(orderParam)
                const parsedOrder: OrderType = JSON.parse(decodedOrder)

                setOrder(parsedOrder)
            } catch (error) {
                console.error('Error parsing order data:', error)
            }
        }
    }, [searchParams])

    return (
        <section className="size-full py-20 px-8">
            <h6 hidden> Checkout Completed </h6>

            <div className="container mx-auto flex items-start gap-8 flex-col lg:flex-row">
                <div className="w-full lg:flex-1">
                    <h2 className="text-3xl font-bold text-primary-600 mb-2">
                        Uhu! Pedido confirmado
                    </h2>

                    <p className="text-base-700">
                        Agora é só aguardar que logo o café chegará até você
                    </p>

                    <ul className="flex-1 flex flex-col items-center justify-center gap-10 mt-14 p-10 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] border border-secondary-400">
                        <li className="w-full flex gap-2 flex-col sm:flex-row sm:items-center">
                            <span className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
                                <Icon
                                    name="shopping-cart"
                                    className="text-white"
                                />
                            </span>

                            <span className="flex-1 flex flex-col">
                                Entrega em
                                {order && (
                                    <span className="font-bold">
                                        {`${order.address.street}, ${order.address.number} - ${order.address.district} - ${order.address.city}, ${order.address.state} - ${order.address.postal_code} - Complemento: ${order.address.complement || '-'}`}
                                    </span>
                                )}
                            </span>
                        </li>

                        <li className="w-full flex gap-2 flex-col sm:flex-row sm:items-center">
                            <span className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                                <Icon name="timer" className="text-white" />
                            </span>

                            <span className="flex-1 flex flex-col">
                                Previsão de entrega
                                <span className="font-bold">
                                    20 min - 30 min
                                </span>
                            </span>
                        </li>

                        <li className="w-full flex gap-2 flex-col sm:flex-row sm:items-center">
                            <span className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                                <Icon
                                    name="dollar-sign"
                                    className="text-white"
                                />
                            </span>

                            <span className="flex-1 flex flex-col">
                                Pagamento na entrega
                                {order && (
                                    <span className="font-bold">
                                        {order.address.payment_type ===
                                            'credit_card' &&
                                            'Cartão de Crédito'}

                                        {order.address.payment_type === 'pix' &&
                                            'Pix'}

                                        {order.address.payment_type ===
                                            'money' && 'Dinheiro'}
                                    </span>
                                )}
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="w-full lg:flex-1 flex items-center justify-center">
                    <Image
                        src={ilustrationSvg}
                        alt="Delivery"
                        className="size-96"
                        width={384}
                        height={384}
                    />
                </div>
            </div>
        </section>
    )
}
