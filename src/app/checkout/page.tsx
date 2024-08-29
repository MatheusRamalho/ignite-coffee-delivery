'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

import { useCart } from '@/hooks/useCart'
import { calculateCartTotalPrice, priceFormat } from '@/utils/price'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { Icon } from '@/components/Icon'
import {
    InputRoot,
    InputError,
    InputControl,
    InputControlRadio,
} from '@/components/Input'

const addressSchema = z.object({
    postal_code: z
        .string({ message: 'O cep é obrigatório' })
        .min(8, { message: 'O cep não pode ter menos de 8 dígitos.' })
        .max(9, { message: 'O cep não pode ter mais de 8 dígitos.' }),
    state: z
        .string({ message: 'O estado é obrigatório' })
        .min(2, { message: 'O estado não pode ter menos de 2 dígitos.' })
        .max(2, { message: 'O estado não pode ter mais de 2 dígitos.' }),
    city: z.string({ message: 'O nome da cidade é obrigatório' }),
    district: z.string({ message: 'O nome do bairro é obrigatório' }),
    street: z.string({ message: 'O nome da rua é obrigatório' }),
    number: z.string({ message: 'O número é obrigatório' }),
    complement: z.string().optional().or(z.literal('')),
    payment_type: z.enum(['credit_card', 'pix', 'money'], {
        required_error: 'O tipo de pagamento é obrigatório',
    }),
})

type AddressSchemaData = z.infer<typeof addressSchema>

export default function Checkout() {
    const { cartItems } = useCart()
    const router = useRouter()

    const priceDelivery = 350

    const priceTotalItens =
        cartItems && cartItems.length > 0
            ? calculateCartTotalPrice({ cartItems })
            : 0

    const priceTotalOrder = priceTotalItens + priceDelivery

    const {
        control,
        handleSubmit,
        setValue,
        watch,
        reset,
        formState: { errors },
    } = useForm<AddressSchemaData>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            postal_code: '',
            state: '',
            city: '',
            district: '',
            street: '',
            number: '',
            complement: '',
            payment_type: 'credit_card',
        },
    })

    const postalCodeWatch = watch('postal_code')

    async function getViacep() {
        const postalCodeWatchWithoutHyphen =
            postalCodeWatch.replace(/\D/g, '') || ''

        if (postalCodeWatchWithoutHyphen.length !== 8) {
            return
        }

        try {
            const response = await fetch(
                `https://viacep.com.br/ws/${postalCodeWatchWithoutHyphen}/json`,
            )

            const data = await response.json()

            if (!data.erro) {
                setValue('city', data.localidade)
                setValue('state', data.uf)
                setValue('street', data.logradouro)
                setValue('district', data.bairro)
                setValue('complement', data.complemento)
            }
        } catch (error) {
            console.error('Error fetching data:', error)
            reset()
        } finally {
            // reset()
            // setIsAlertOpen(false)
        }
    }

    async function handleCreateNewOrder(data: AddressSchemaData) {
        try {
            if (
                data &&
                cartItems &&
                priceDelivery &&
                priceTotalItens &&
                priceTotalOrder
            ) {
                const order = {
                    address: data,
                    itens: cartItems,
                    priceDelivery,
                    priceTotalItens,
                    priceTotalOrder,
                }

                const orderString = encodeURIComponent(JSON.stringify(order))
                router.push(`/checkout/completed?order=${orderString}`)
            }
        } catch (error) {
            console.error(error)
        } finally {
            console.log('Finally')
        }
    }

    return (
        <section className="size-full py-32 px-8">
            <h6 hidden> Checkout </h6>

            <div className="container mx-auto flex items-start gap-8 flex-col lg:flex-row">
                <div className="w-full lg:flex-1">
                    <h2 className="text-3xl font-bold mb-2">
                        Complete seu pedido
                    </h2>

                    <form
                        id="formCheckout"
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit(handleCreateNewOrder)}
                    >
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

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <InputRoot>
                                        <InputControl
                                            required
                                            type="text"
                                            id="postal_code"
                                            name="postal_code"
                                            placeholder="CEP"
                                            control={control}
                                            onBlur={getViacep}
                                        />

                                        <InputError
                                            name="postal_code"
                                            error={errors}
                                        />
                                    </InputRoot>

                                    <InputRoot>
                                        <InputControl
                                            required
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder="UF"
                                            minLength={2}
                                            control={control}
                                        />

                                        <InputError
                                            name="state"
                                            error={errors}
                                        />
                                    </InputRoot>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <InputRoot>
                                        <InputControl
                                            required
                                            type="text"
                                            id="district"
                                            name="district"
                                            placeholder="Bairro"
                                            control={control}
                                        />

                                        <InputError
                                            name="district"
                                            error={errors}
                                        />
                                    </InputRoot>

                                    <InputRoot>
                                        <InputControl
                                            type="text"
                                            required
                                            id="city"
                                            name="city"
                                            placeholder="Cidade"
                                            control={control}
                                        />

                                        <InputError
                                            name="city"
                                            error={errors}
                                        />
                                    </InputRoot>
                                </div>

                                <InputRoot>
                                    <InputControl
                                        required
                                        type="text"
                                        id="street"
                                        name="street"
                                        placeholder="Rua"
                                        control={control}
                                    />

                                    <InputError name="street" error={errors} />
                                </InputRoot>

                                <div className="flex flex-col gap-4 sm:flex-row">
                                    <InputRoot>
                                        <InputControl
                                            required
                                            type="text"
                                            id="number"
                                            name="number"
                                            placeholder="Número"
                                            control={control}
                                        />

                                        <InputError
                                            name="number"
                                            error={errors}
                                        />
                                    </InputRoot>

                                    <InputRoot>
                                        <InputControl
                                            type="text"
                                            id="complement"
                                            name="complement"
                                            placeholder="Complemento"
                                            control={control}
                                        />

                                        <InputError
                                            name="complement"
                                            error={errors}
                                        />
                                    </InputRoot>
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
                                O pagamento é feito na entrega. Escolha a forma
                                que deseja pagar
                            </p>

                            <fieldset
                                form="formCheckout"
                                name="payment-type"
                                className="border-none mt-10"
                            >
                                <legend className="hidden">
                                    Forma de pagamento
                                </legend>

                                <InputRoot>
                                    <div className="flex gap-4 flex-row flex-wrap">
                                        <InputControlRadio
                                            icon="credit-card"
                                            text="Cartão de crédito"
                                            required
                                            id="payment_type"
                                            name="payment_type"
                                            value="credit_card"
                                            control={control}
                                        />

                                        <InputControlRadio
                                            icon="qr-code"
                                            text="Pix"
                                            required
                                            id="payment_type"
                                            name="payment_type"
                                            value="pix"
                                            control={control}
                                        />

                                        <InputControlRadio
                                            icon="dollar-sign"
                                            text="Dinheiro"
                                            required
                                            id="payment_type"
                                            name="payment_type"
                                            value="money"
                                            control={control}
                                        />
                                    </div>

                                    <InputError
                                        name="payment_type"
                                        error={errors}
                                    />
                                </InputRoot>
                            </fieldset>
                        </div>
                    </form>
                </div>

                <div className="w-full lg:flex-1">
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
                                    })}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-base-700">
                                <span className=""> Entrega </span>

                                <span className="">
                                    R${' '}
                                    {priceFormat({
                                        priceInCents: priceDelivery,
                                    })}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-base-800 text-xl font-bold">
                                <span className=""> Total </span>

                                <span className="">
                                    R${' '}
                                    {priceFormat({
                                        priceInCents: priceTotalOrder,
                                    })}
                                </span>
                            </div>
                        </div>

                        <Button type="submit" form="formCheckout">
                            Confirmar Pedido
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
