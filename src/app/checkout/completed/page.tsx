import Image from 'next/image'

import { Icon } from '@/components/Icon'

import ilustrationSvg from '@/assets/svgs/illustration.svg'

export default function CheckoutCompleted() {
    return (
        <section className="w-full h-full py-32 px-8">
            <h6 hidden> Checkout Completed </h6>

            <div className="container mx-auto flex items-center justify-center gap-8">
                <div className="">
                    <h2 className="text-3xl font-bold text-primary-600 mb-2">
                        Uhu! Pedido confirmado
                    </h2>

                    <p className="text-base-700">
                        Agora é só aguardar que logo o café chegará até você
                    </p>

                    <ul className="flex-1 flex flex-col items-center justify-center gap-10 mt-14 p-10 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] border border-secondary-400">
                        <li className="w-full flex items-center gap-2">
                            <span className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
                                <Icon
                                    name="shopping-cart"
                                    className="text-white"
                                />
                            </span>

                            <span className="flex-1 flex flex-col">
                                Entrega em
                                <span className="font-bold">
                                    Rua João Daniel Martinelli, 102 Farrapos -
                                    Porto Alegre, RS
                                </span>
                            </span>
                        </li>

                        <li className="w-full flex items-center gap-2">
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

                        <li className="w-full flex items-center gap-2">
                            <span className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                                <Icon
                                    name="dollar-sign"
                                    className="text-white"
                                />
                            </span>

                            <span className="flex-1 flex flex-col">
                                Pagamento na entrega
                                <span className="font-bold">
                                    Cartão de Crédito
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <Image src={ilustrationSvg} alt="" />
                </div>
            </div>
        </section>
    )
}
