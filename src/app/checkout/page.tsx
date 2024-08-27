'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { COFFEES_CART_DATA } from '@/data/coffees'
import { Icon } from '@/components/Icon'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { CartItem } from '@/components/CartItem'
import { InputRadio } from '@/components/InputRadio'
import console from 'console'

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
})

type AddressSchemaData = z.infer<typeof addressSchema>

export default function Checkout() {
    const {
        control,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
        reset,
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
        },
    })

    const postalCodeWatch = watch('postal_code')

    async function getViacep() {
        // setIsAlertOpen(true)

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

            if (data.erro) {
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
            reset()
            // setIsAlertOpen(false)
        }
    }

    function handleRemoveItem() {
        console.log('')
    }

    async function handleCreateNewOrder(data: AddressSchemaData) {
        try {
            console.log(data)
        } catch (error) {
            console.error(error)
        } finally {
            console.log('Finally')
        }
    }

    return (
        <section className="w-full h-full py-32 px-8">
            <h6 hidden> Checkout </h6>

            <form
                id="formCheckout"
                onSubmit={handleSubmit(handleCreateNewOrder)}
            >
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
                                        required
                                        type="text"
                                        id="postalCode"
                                        name="postalCode"
                                        placeholder="CEP"
                                        control={control}
                                        onBlur={getViacep}
                                    />

                                    <Input
                                        required
                                        type="text"
                                        id="street"
                                        name="street"
                                        placeholder="Rua"
                                        control={control}
                                    />

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Input
                                            required
                                            type="text"
                                            id="number"
                                            name="number"
                                            placeholder="Número"
                                            control={control}
                                        />

                                        <Input
                                            type="text"
                                            id="complement"
                                            name="complement"
                                            placeholder="Complemento"
                                            control={control}
                                        />
                                    </div>

                                    <div className="flex flex-col gap-4 sm:flex-row">
                                        <Input
                                            required
                                            type="text"
                                            id="district"
                                            name="district"
                                            placeholder="Bairro"
                                            control={control}
                                        />

                                        <Input
                                            type="text"
                                            required
                                            id="city"
                                            name="city"
                                            placeholder="Cidade"
                                            control={control}
                                        />

                                        <Input
                                            required
                                            type="text"
                                            id="state"
                                            name="state"
                                            placeholder="UF"
                                            minLength={2}
                                            control={control}
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
