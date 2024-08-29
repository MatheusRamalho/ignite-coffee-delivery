export interface AddressType {
    postal_code: string
    state: string
    city: string
    district: string
    street: string
    number: string
    complement: string
    payment_type: 'credit_card' | 'pix' | 'money'
}
