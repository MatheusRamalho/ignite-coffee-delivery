import Image from 'next/image'

import { Icon } from '@/components/Icon'
import heroImg from '@/assets/imgs/hero.png'

export function Hero() {
    return (
        <section className="w-full h-full py-32 px-8 bg-cover bg-no-repeat bg-center bg-hero">
            <h6 hidden> Session hero </h6>

            <div className="container mx-auto">
                <div className="flex items-center justify-center gap-8 flex-col lg:flex-row">
                    <div className="flex-1">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">
                                Encontre o café parfeito para qualquer hora do
                                dia
                            </h1>

                            <p className="mt-8 text-zinc-700">
                                Com o Coffee Delivery você recebe seu café onde
                                estiver, a qualquer hora
                            </p>
                        </div>

                        <ul className="w-fit flex items-center justify-center flex-wrap lg:flex-nowrap gap-6 mt-14 mx-auto lg:mx-0">
                            <li className="w-full flex gap-6 flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center">
                                        <Icon
                                            name="shopping-cart"
                                            className="text-white"
                                        />
                                    </span>

                                    <span className="flex-1">
                                        Compra simples e segura
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                                        <Icon
                                            name="timer"
                                            className="text-white"
                                        />
                                    </span>

                                    <span className="flex-1">
                                        Entrega rápida e rastreada
                                    </span>
                                </div>
                            </li>

                            <li className="w-full flex gap-6 flex-col">
                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center">
                                        <Icon
                                            name="package"
                                            className="text-white"
                                        />
                                    </span>

                                    <span className="flex-1">
                                        Embalagem mantém o café intacto
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <span className="w-10 h-10 rounded-full bg-secondary-600 flex items-center justify-center">
                                        <Icon
                                            name="coffee"
                                            className="text-white"
                                        />
                                    </span>

                                    <span className="flex-1">
                                        O café chega fresquinho até você
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                        <Image
                            src={heroImg}
                            alt="Coffee Delivery hero, um copo de café com alguns itens utilizados para fazer café ao fundo, junto a grãos de café e fundo amarelo."
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
