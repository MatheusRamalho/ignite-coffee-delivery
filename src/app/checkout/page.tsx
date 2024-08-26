'use client'

import { useState } from 'react'

import { COFFEES_CART_DATA } from '@/data/coffees'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { Icon } from '@/components/Icon'
import { InputRadio } from '@/components/InputRadio'
import { Input } from '@/components/Input'

// const paymentType = 'credit_card' | 'pix' | 'money'

export default function Checkout() {
    const [postalCode, setPostalCode] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [state, setState] = useState<string>('')
    const [street, setStreet] = useState<string>('')
    const [district, setDistrict] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [complement, setComplement] = useState<string>('')
    // const [paymentType, setPaymentType] = useState('')

    async function fetchCepData() {
        const response = await fetch(
            `https://viacep.com.br/ws/${postalCode}/json`,
        )
        const data = await response.json()

        if (data.erro) {
            setPostalCode('')
        } else {
            setCity(data.localidade)
            setState(data.uf)
            setStreet(data.logradouro)
            setDistrict(data.bairro)
            setNumber(data.number)
        }
    }

    function handleRemoveItem() {
        console.log('')
    }

    function handleSubmit() {
        console.log('')
    }

    return (
        <section className="w-full h-full py-32 px-8">
            <h6 hidden> Checkout </h6>

            <form id="formCheckout" onSubmit={handleSubmit}>
                <div className="container mx-auto flex items-start gap-8">
                    <div className="">
                        <h2 className="text-3xl font-bold mb-2">
                            Complete seu pedido
                        </h2>

                        <div className="flex flex-col gap-4">
                            <div className="p-6 rounded-md bg-base-200">
                                <h6 className="text-base-700 font-medium text-lg flex items-center gap-2">
                                    <Icon
                                        name="map-pin"
                                        className="text-primary-500"
                                    />
                                    Endereço de entrega
                                </h6>

                                <p className="text-base-700 pl-8">
                                    Informe o endereço onde deseja receber seu
                                    pedido
                                </p>

                                <fieldset
                                    form="formCheckout"
                                    name="address"
                                    className="border-none flex flex-col gap-4 mt-10"
                                >
                                    <legend className="hidden">
                                        Informe os dados do endereço
                                    </legend>

                                    <Input
                                        isNotFull
                                        type="text"
                                        required
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder="CEP"
                                        value={postalCode}
                                        onChange={(event) =>
                                            setPostalCode(event.target.value)
                                        }
                                        onBlur={fetchCepData}
                                    />

                                    <Input
                                        type="text"
                                        required
                                        id="street"
                                        name="street"
                                        placeholder="Rua"
                                        value={street}
                                        onChange={(event) =>
                                            setStreet(event.target.value)
                                        }
                                    />

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Input
                                            type="text"
                                            required
                                            id="number"
                                            name="number"
                                            placeholder="Número"
                                            value={number}
                                            onChange={(event) =>
                                                setNumber(event.target.value)
                                            }
                                        />

                                        <Input
                                            type="text"
                                            id="complement"
                                            name="complement"
                                            placeholder="Complemento"
                                            value={complement}
                                            onChange={(event) =>
                                                setComplement(
                                                    event.target.value,
                                                )
                                            }
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Input
                                            type="text"
                                            required
                                            id="district"
                                            name="district"
                                            placeholder="Bairro"
                                            value={district}
                                            onChange={(event) =>
                                                setDistrict(event.target.value)
                                            }
                                        />

                                        <Input
                                            type="text"
                                            required
                                            id="city"
                                            name="city"
                                            placeholder="Cidade"
                                            value={city}
                                            onChange={(event) =>
                                                setCity(event.target.value)
                                            }
                                        />

                                        <Input
                                            type="text"
                                            required
                                            id="state"
                                            name="state"
                                            placeholder="UF"
                                            minLength={2}
                                            value={state}
                                            onChange={(event) =>
                                                setState(event.target.value)
                                            }
                                        />
                                    </div>
                                </fieldset>
                            </div>

                            <div className="p-6 rounded-md bg-base-200">
                                <h6 className="text-base-700 font-medium text-lg flex items-center gap-2">
                                    <Icon
                                        name="dollar-sign"
                                        className="text-secondary-500"
                                    />
                                    Pagamento
                                </h6>

                                <p className="text-base-700 pl-8">
                                    O pagamento é feito na entrega. Escolha a
                                    forma que deseja pagar
                                </p>

                                <fieldset
                                    form="formCheckout"
                                    name="payment-type"
                                    className="border-none mt-10"
                                >
                                    <legend className="hidden">
                                        Forma de pagamento
                                    </legend>

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <InputRadio
                                            icon="credit-card"
                                            text="Cartão de crédito"
                                            required
                                            id="paymentType"
                                            name="paymentType"
                                            value="credit_card"
                                            // onChange={(event) => setPaymentType(event.target.value)}
                                        />

                                        <InputRadio
                                            icon="credit-card"
                                            text="Pix"
                                            required
                                            id="paymentType"
                                            name="paymentType"
                                            value="pix"
                                            // onChange={(event) => setPaymentType(event.target.value)}
                                        />

                                        <InputRadio
                                            icon="credit-card"
                                            text="Dinheiro"
                                            required
                                            id="paymentType"
                                            name="paymentType"
                                            value="money"
                                            // onChange={(event) => setPaymentType(event.target.value)}
                                        />
                                    </div>
                                </fieldset>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <h2 className="text-3xl font-bold mb-2">
                            Cafés selecionados
                        </h2>

                        <div className="p-6 rounded-md rounded-tr-[2.25rem] rounded-bl-[2.25rem] bg-base-200 flex flex-col gap-8">
                            <div className="">
                                {COFFEES_CART_DATA &&
                                    COFFEES_CART_DATA.length > 0 &&
                                    COFFEES_CART_DATA.map((element) => {
                                        return (
                                            <CartItem
                                                key={element.id}
                                                id={element.id}
                                                image={element.image}
                                                name={element.name}
                                                price={element.price}
                                                onClick={handleRemoveItem}
                                            />
                                        )
                                    })}
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center justify-between text-base-700">
                                    <span className=""> Total de itens </span>
                                    <span className=""> R$ 29.70 </span>
                                </div>

                                <div className="flex items-center justify-between text-base-700">
                                    <span className=""> Entrega </span>
                                    <span className=""> R$ 3.50 </span>
                                </div>

                                <div className="flex items-center justify-between text-base-800 text-xl font-bold">
                                    <span className=""> Total </span>
                                    <span className=""> R$ 33.20 </span>
                                </div>
                            </div>

                            <Button type="submit"> Confirmar Pedido </Button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
