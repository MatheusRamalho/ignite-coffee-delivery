import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@/components/Input'
import { InputRadio } from '@/components/InputRadio'
import { Icon } from '@/components/Icon'

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

export function AddressForm() {
    const { control, handleSubmit, setValue, watch, reset } =
        useForm<AddressSchemaData>({
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
        <div className="flex-1">
            <h2 className="text-3xl font-bold mb-2">Complete seu pedido</h2>

            <div className="flex flex-col gap-4">
                <div className="p-6 rounded-md bg-base-200">
                    <h6 className="text-base-700 font-medium text-lg flex items-center gap-2">
                        <Icon name="map-pin" className="text-primary-500" />
                        Endereço de entrega
                    </h6>

                    <p className="text-base-700 pl-8">
                        Informe o endereço onde deseja receber seu pedido
                    </p>

                    <form
                        id="formCheckout"
                        onSubmit={handleSubmit(handleCreateNewOrder)}
                    >
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
                    </form>
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
                        O pagamento é feito na entrega. Escolha a forma que
                        deseja pagar
                    </p>

                    <fieldset
                        form="formCheckout"
                        name="payment-type"
                        className="border-none mt-10"
                    >
                        <legend className="hidden">Forma de pagamento</legend>

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
    )
}
